# Project Constraints 

## Economic Constraint

This project presents manageable financial limitations. First, we need to estimate the bandwidth of our application 

We estimate the bandwidth per match as follows: 

On average, each chess match has 40 moves. We will choose 50 moves/match as the threshold. 

Each move (“e.g., e2 to e4”) should consume at most 1 KB/move 

Each match will have at most 4 players/match 

Therefore, each match will consume at most:  

4 players/match * 50 moves/player * 1 KB/move = 200 KB/match 

We estimate the matches per month as follows: 

Let's generously estimate that this website hosts 1,000 matches per day. Then, for 1 month, the total matches would be 30 days/month * 1,000 matches/day = 30,000 matches/month 

Then, the total data consume per month would be:  

30,000 matches/month * 200 KB/match  

= 6,000,000 KB/month 

= 6,000,000 MB/month * (1/1024) = 5859.371 MB/month 

= 5859.371 GB/month * (1/1024) = 5.722 GB/month 

 

Both the free tier offered by Render.io and Vercel offers 100GB of bandwidth per month, which spaciously accommodate our over-estimated bandwidth of 5.722 GB/month 

The funds for this project are supplied personally. However, I plan to integrate a payment service into the application to enable user donation. This small income stream will scale with the number of users and will help to pay any fees incurred. 

## Legal Constraint

No Exclusive Rights to the Game Mode: Chess itself is a centuries-old game with well-established rules. While there may be copyright protection for specific chess books, tournaments, or related content, there are generally no exclusive rights to the concept of playing chess in different modes, such as "Hand and Brain." The game mode itself is not subject to copyright or trademark protection. 

Use of Public Domain Rules: Chess rules, including variations like "Hand and Brain," are typically considered public domain. Public domain rules are not subject to copyright protection, and anyone can use them freely to play or create derivative games. 

Attribution and Fair Use: If you create a digital implementation of the "Hand and Brain" chess game, you can attribute the rules and concept to their traditional origins, making it clear that you are not claiming exclusive rights to the game mode. 

## Security 

For now, I do not plan to implement the user login and user data save, and the data transferred consists mainly of game movements and session data.  