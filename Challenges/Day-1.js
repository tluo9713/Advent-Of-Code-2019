/*
https://adventofcode.com/2019/day/1
--- Day 1: The Tyranny of the Rocket Equation ---

Santa has become stranded at the edge of the Solar System while delivering presents to other planets! To accurately calculate his position in space, safely align his warp drive, and return to Earth in time to save Christmas, he needs you to bring him measurements from fifty stars.

Collect stars by solving puzzles. Two puzzles will be made available on each day in the Advent calendar; the second puzzle is unlocked when you complete the first. Each puzzle grants one star. Good luck!

The Elves quickly load you into a spacecraft and prepare to launch.

At the first Go / No Go poll, every Elf is Go until the Fuel Counter-Upper. They haven't determined the amount of fuel required yet.

Fuel required to launch a given module is based on its mass. Specifically, to find the fuel required for a module, take its mass, divide by three, round down, and subtract 2.

For example:

    For a mass of 12, divide by 3 and round down to get 4, then subtract 2 to get 2.
    For a mass of 14, dividing by 3 and rounding down still yields 4, so the fuel required is also 2.
    For a mass of 1969, the fuel required is 654.
    For a mass of 100756, the fuel required is 33583.

The Fuel Counter-Upper needs to know the total fuel requirement. To find it, individually calculate the fuel needed for the mass of each module (your puzzle input), then add together all the fuel values.

What is the sum of the fuel requirements for all of the modules on your spacecraft?

--- Part Two ---

During the second Go / No Go poll, the Elf in charge of the Rocket Equation Double-Checker stops the launch sequence. Apparently, you forgot to include additional fuel for the fuel you just added.

Fuel itself requires fuel just like a module - take its mass, divide by three, round down, and subtract 2. However, that fuel also requires fuel, and that fuel requires fuel, and so on. Any mass that would require negative fuel should instead be treated as if it requires zero fuel; the remaining mass, if any, is instead handled by wishing really hard, which has no mass and is outside the scope of this calculation.

So, for each module mass, calculate its fuel and add it to the total. Then, treat the fuel amount you just calculated as the input mass and repeat the process, continuing until a fuel requirement is zero or negative. For example:

    A module of mass 14 requires 2 fuel. This fuel requires no further fuel (2 divided by 3 and rounded down is 0, which would call for a negative fuel), so the total fuel required is still just 2.
    At first, a module of mass 1969 requires 654 fuel. Then, this fuel requires 216 more fuel (654 / 3 - 2). 216 then requires 70 more fuel, which requires 21 fuel, which requires 5 fuel, which requires no further fuel. So, the total fuel required for a module of mass 1969 is 654 + 216 + 70 + 21 + 5 = 966.
    The fuel required by a module of mass 100756 and its fuel is: 33583 + 11192 + 3728 + 1240 + 411 + 135 + 43 + 12 + 2 = 50346.

What is the sum of the fuel requirements for all of the modules on your spacecraft when also taking into account the mass of the added fuel? (Calculate the fuel requirements for each module separately, then add them all up at the end.)

*/

let inputArr = test.split('\n');

//Day 1
function dayOne(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];

    let fuel = Math.floor(num / 3) - 2;
    while (fuel > 0) {
      sum += fuel;
      fuel = Math.floor(fuel / 3) - 2;
    }
    //f=m=>(t=(m/3|0)-2,m>6?t+f(t):0)
    //sum += f(num)
  }
  return sum;
}
//o=a=>a.reduce((s,m)=>s+((t=((m/3)|0)-2),m>6?t+f(t):0,0)

let input = `141496
50729
52916
98133
93839
107272
142069
67632
75009
74371
69081
91480
102664
105221
130656
90946
72792
148049
70881
145510
105035
149880
117058
149669
59725
122995
74449
96690
140220
59294
142524
139379
107322
57832
66101
105801
59189
58687
61454
116490
125198
116264
103459
145734
98738
62783
138935
143958
87769
100410
112567
131008
96648
62022
84654
135197
104771
116477
58956
83449
71150
86343
69346
100858
146224
142933
135930
99671
97840
145286
55577
88347
75169
73059
144308
110284
117688
146396
75934
92370
124781
133506
134441
98229
100872
75249
108598
106277
80388
138398
143521
74189
72945
79918
132770
78616
91499
124595
89042
90715`;
