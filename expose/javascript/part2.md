1. At line 12 value of i will be printed. Which it is i's value when the for loop end which is 3.
2. At line 13 value of discountedPrice will be printed. The last entry of prices is 300 with 0.5 discount. DiscountedPrice should have a value of 150
3. At line 14 value of finalPrice will be printed which will be 150. As the last discountedPrice is 150.
4. The function will return the array with all 3 finalPrice through the loop [50,100,150].
5. At line 12 the code will run into error where i is not define. i is define with let so it only live inside the scope of the for loop.
6. At line 13 the code will into error because discountedPrice is define with let so it only live inside of for loop.
7. At line 14 150 will be printed. Unlike other two variable finalPrice is define with let but inside the function discountPrices. So it still exist after the for loop.
8. The array [50,100,150] will be return without any error, because discounted is define in the scope function discountPrices using let
9. At line 11 the code run into problem with i is not define because i only live inside the for loop
10. At line 12 the value of 3 will be printed. input array has a length of 3 and length is define to be 3.
11. The function will return the arry [50,100,150]. Although const variable can not be change. However, in the for loop everytime discountedPrice is reinitial giving it different value, and these value are added to the discounted arrary.
12. a. student.name b. student["Grad Year"] c. student.greeting() d. student["Favorite Teacher"].name e. student.courseLoard[0]
13. A. '3' + 2 = '32' B. '3' - 2 = 1 C. 3 + null = 3 D. '3' + null = '3null' E. true + 3 = 4 F. false + null = 0 G. '3' + undefined = '3undefined' H. '3' - undefined = NaN
14. A. '2' > 1 = true  B. '2' < '12' = false C. 2 == '2' = true D. 2 ===='2' = false E. true == 2 = false F. true ===Boolean(2) = true
15.   == checking equal with type conversion, but === checks the equality without type conversion
17. The result array will be [2,4,6]. First we put in the array [1,2,3] then put in te function doSomething as the callback function. Going through the for loop, for each array[i] we put it into the function doSomething then push the result into the newArr. Since doSomething *2 input by 2. So we have 1 ->2 2->4 3->6.
19. The output would be 1 4 3 2, 1 and 4 print inorder then 3 print after 0 milisecond, then 2 print after 1 second
