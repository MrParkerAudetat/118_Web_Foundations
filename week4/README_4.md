# README 3: Intro to JavaScript
## HTML File
The HTML is very much like the other HTMLs created in the past. The difference here is the script command line that has the HTML reference to the "week_3_script.js". This reference is here so by the time the page is up, the information stored in the JS file is able to be outputted into the dev console in the browser's terminal immediately.

## JSON File
This program defines a function (getRoundStatus), that takes the number of rounds survived, the round goal that the user has, and signifies whether or not the set round goal has been reached or not. When the user reached their goal and the reached flag is true, it will return back with "Goal: Reached, if they have not reached their goal, it will return back with "Goal: Not reached". The JS script then calls the "getRoundStatus" function that has the sample values from the constants, and logs the inputs and the status of the goal, into the console seen in the browser's dev terminal.

## AI Assistance
* AI helped identify a function that despite being passed into the getRoundStatus function, it was not actually being called too because I decided to use the integer "44" instead of the "goal" parameter. 

* AI suggested to give me new parameter names for the function so it would be more easy to keep track of and read. The parameter names were originally the same as the constants so I decided to change "roundsSurvived" -> "survived", "roundGoal" -> "goal", and finally "roundReached" to "reached".

* It also pointed out that on lines 13-15, if the goal was being met but the flag was false, it neither if statement would work so I would get an undefined value. I fixed this by using the suggestion AI gave me which was to put a return on line 10 for "goal not reached" instead of it being it's own separate if statement.

* On line 17, I added a // comment, and I had accidentally put a closing bracket on the same line as the comment. This ended up causing an error which I did not pick up on until I asked AI what I did wrong. 

* I had the AI help clarify what was happening in the JS file so I could make sure I was understanding what was going on.