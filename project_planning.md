## Feature

1. White Screen
2. intial color of text is lightgray
3. Show timer
4. Show the average time taken to complete one sentence

## Requirement

1. Screen with white background
2. We need some words appprox (50)
3. Time calculations

## Breakdown

1. We need to generate sentence
2. Make it random.
3. Overwritting
4. Check overwritting is correct or not.
5. correct -> textColor -> black, else red
6. calculate the length of sentence.
7. calculate time taken to complete the sentence
8. calculate the time to complete one word .
9. make it average
10. show on screen

### approach for checking equal or not

r.getCharCode se hum key. press ka code le lenge -> wuske baad wusko string meo convert kr deneg - >
fir ek variable bnayenge toh jo humara current string k index ko count krta rahega -> fir hum bs check karenge ki ye ki iss index ki value key se match ho rhi hai ya nhi
, agr nhi ho rhi hai toh mismatch name k variable k count ko 1 bdha denge

### approach for calculating the WPM

first i get the length of that sentence including space and punctutation, then i count the second taken by the user by using 1/FPS to get the second then I use Math.floor to convert into the integer after getting the second I convert into minute and then I use this formula :-

        WPM = (Total Character of string * Time) / 5 :- this is the standard formula
