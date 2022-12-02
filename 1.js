let calories = prompt("test");
calories = calories.split("\n");
console.log(calories);

// turn into all numbers
for (let i = 0; i < calories.length; i++) {
    calories[i] = Number(calories[i])
}

// count up the calorie counts per individual elf 
let x = 0;
let max_cals = [0, 0, 0];
let cur = 0;
while (x < calories.length) {
    // go from x to end of current elf
    if (calories[x] != 0 && x != calories.length - 1) {
        cur += calories[x];
        x += 1;
    } else {
        // at the end of the current elf
        if (cur > max_cals[2]) {
            // it's bigger than the smallest one, just need to figure out where to put it
            if (cur > max_cals[1]) {
                if (cur > max_cals[0]) {
                    max_cals[2] = max_cals[1];
                    max_cals[1] = max_cals[0];
                    max_cals[0] = cur;
                } else {
                    max_cals[2] = max_cals[1];
                    max_cals[1] = cur;
                }
            } else {
                max_cals[2] = cur;
            }
        }
        x += 1;
        cur = 0;
    }
}
if (cur > max_cals[2]) {
    // it's bigger than the smallest one, just need to figure out where to put it
    if (cur > max_cals[1]) {
        if (cur > max_cals[0]) {
            max_cals[2] = max_cals[1];
            max_cals[1] = max_cals[0];
            max_cals[0] = cur;
        } else {
            max_cals[2] = max_cals[1];
            max_cals[1] = cur;
        }
    } else {
        max_cals[2] = cur;
    }
}
let sum = max_cals[0] + max_cals[1] + max_cals[2];
alert(max_cals[0]);
alert(sum);
