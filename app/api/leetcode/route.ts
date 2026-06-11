import { NextResponse } from "next/server";

export async function GET() {
  const username = "rai_yashmit";
  const query = `
    query getUserProfile($username: String!) {
      matchedUser(username: $username) {
        submitStats {
          acSubmissionNum {
            difficulty
            count
          }
        }
      }
    }
  `;

  try {
    const response = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Referer": "https://leetcode.com",
      },
      body: JSON.stringify({ query, variables: { username } }),
      // Revalidate every hour (3600 seconds) to keep stats relatively fresh
      // without hitting the API on every single page load.
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      throw new Error(`LeetCode API responded with status: ${response.status}`);
    }

    const data = await response.json();
    
    // Safety check in case the username doesn't exist or API changes
    if (!data.data?.matchedUser?.submitStats?.acSubmissionNum) {
      throw new Error("Invalid data structure from LeetCode");
    }

    const statsArray = data.data.matchedUser.submitStats.acSubmissionNum;
    
    // Transform array into an easier to use object
    const stats = {
      total: statsArray.find((item: any) => item.difficulty === "All")?.count || 0,
      easy: statsArray.find((item: any) => item.difficulty === "Easy")?.count || 0,
      medium: statsArray.find((item: any) => item.difficulty === "Medium")?.count || 0,
      hard: statsArray.find((item: any) => item.difficulty === "Hard")?.count || 0,
    };

    return NextResponse.json(stats);
  } catch (error) {
    console.error("Error fetching LeetCode stats:", error);
    return NextResponse.json(
      { error: "Failed to fetch LeetCode stats" },
      { status: 500 }
    );
  }
}
