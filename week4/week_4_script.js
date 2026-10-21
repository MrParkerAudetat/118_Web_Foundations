const roundsSurvived = 50;
const roundGoal = 44;
const roundReached = true;

function getRoundStatus(survived, goal, reached) {
    if (survived >= goal && reached) {
        return "Goal: Reached";
    }

    return "Goal: Not reached";
    // I added the above return statement to ensure that the function always returns a value, even if the goal was not reached. This now prevents the function from returning "undefined" in any case. This also was pointed out to me when I had AI look over my program for any minor errors.

    // if (survived < goal) {
    //     return "Goal: Not Reached";
    //}

    // Lines 13-15 only handled survived < goal. If the goal was met but reached was false, nothing was returned (undefined).
    }

const message = getRoundStatus(roundsSurvived, roundGoal, roundReached);

console.log("Round Survived:", roundsSurvived);
console.log("Round Goal:", roundGoal);
console.log("Round Reached:", roundReached);
console.log("Round Status:", message);