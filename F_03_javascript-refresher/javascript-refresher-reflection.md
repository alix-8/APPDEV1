### 00_script_in_html.html
Before, naituro naman na po sa amin ang script tags. It serves as a way to import scripts/JavaScript file. What I've learned new po is the ___type="module"___. I've learned that this makes the browser read not in its usual way (which is top-to-bottom). Tinatapos muna ng browser basahain ang html bago ang script, so hndi napo-pause ang pagbasa ng browser kahit san ilagay ang ___script___ tags.

### 01_base_syntax.js
I relearned here the variable and function naming conventions. Variables should start only with certain characters (a letter, $, or _ ). Names are also case-sensitive, and bawal ang reserved word as a name. Also, ang pinakaginagamit na naming convention ay camelCase.

### 02_variables.js
In this part, natutunan ko ulit yung primitive data types and yung equal sign usage for comparison. From what I remember sa lessons dati ni Sir Jehu, the "==" is called a "loose coercion" and a "===" is called a strict coercion.

### 03_functions.js
I relearned here the basics of functions in JavaScript. Functions are the ways a logic is packed to be a reusable "something". Merong 3 ways ng pag-declare nito as shown sa code. Ang pinaka-naalala ko from discussion is yung arrow function.

### 04_objects.js
The concept of "objects" is not new to us. Pero ang pinakatumatak sa akin dito is yung kahit const na dineclare yung object, you can still somehow modify it by appending a new attribute later on.

### 05_arrays.js
Here, I learned array manipulation. JavaScript's array manipulation is very similar to those on other programming language. `.push` adds an item on the rear end, while `.shift` removes the first item.

### 06_control_structures.js
Sa part na 'to, natutunan ko ang basic control structures sa JavaScript: ___if...else___, ___for loop___,and  ___while loop___. A for loop runs on the known number that you give it, on other hand, yung while loop naman runs/iterates until a certain condition is satisfied/met. The new thing that I've learned is that you have to be careful sa pagkakasunod-sunod ng cases na ilalagay sa ___if...else___ because that affects the output of the code.

### 07_dom.html
I've learned here the DOM manipulation that JavaScript does. Nang una, tinry ko na sa integrated browser lang ng VScode i-run itong file, but it didn't work. The pop up message from the `prompt()` didn't show, so the background color didn''t change at all. It only worked when I ran the file in Chrome. These are the new functions I've learned: `prompt() `which asks the user for input, and `setTimeout()` which runs code after a delay/set time.

### 08_essential_features.js
In this part, I've learned the "__3 features that I'll rely on constantly__". It's true na magre-rely ako sa functions na 'to lagi kasi nagaamit na rin namin 'to sa system namin,, and di pwedeng mawala ang mga function na 'to. The ___.map()___ maps an array'c contents. The ___object destructuring___ 

### 09_tricky_parts.js
In-emphasize ulit dito ang difference ng strict and loose coercion. The == (or loose coercion) doesn't convert the elements before comparing, while the === (or strict coercion). Leaving a variable empty or no value makes it ___undefined___, and putting a "null" as a value on a variable means your intentionally leaving it null (pwede lagyan ng value mamaya).
Natutunan ko rin na sa JS, naka-depend ang 'this' ng regular function sa kung paano ito tinawag, while ginagaya lang 'to ng arrow function. Another one is pag nag-copy naman ng array gamit ang '=', pointer lang ang nakokopya kaya nadadamay ang original arrray, dapat gamitin ang spread operator (...) para may hiwalay na copy if need mo pa rin makuha ang original copy later on.

### 10_let_const.js
In this part, I've learned the three variable declarations (let, const, and var). The "let" declaration lets you be able to change the variable later on. The "const" declaration is unchangable, you won't be able to reassign a value to that variable. Yung "var" naman is very similar to the "let" declaration, but avoid using this because it's an outdated version.

### 11_arrow_functions.js
In this section, natutunan ko ang difference ng ordinary methods at arrow functions. Ang ordinary methods ay may sariling "this" na naka-depend sa kung paano mo sila gagamitin sa object. Ang arrow functions naman ay walang sariling "this" kaya gina-grab lang nila yon sa labas na scope. Meron ding implicit return ang arrow functions, it automatically na nare-return yung value basta one-liner lang at walang curly braces.

### 12_destructuring.js
Sa part na 'to, nag-deep dive naman yung pag-explain ng concept na destructuring. I've learned that destructuring is used when an item is needed to be extracted from an array. Hindi lang sa arrays nagana 'to, pati rin sa parameter list ng functions.

### 13_spread_rest.js
I've learned here that spread rest copies an array (or a function) without modifying it, it only makes a copy of it with the modifications you added. Hindi lang sa arrrays nagana yung spread, nagana din 'to sa objects and functions.

### 14_classes_inheritance.js
In this part, I've relearned the concept of class inheritance. Ginagamit ang keyword "extend" kapag magi-inherit ang isang class from one class (just like the syntax sa ibang language).

### 15_modules_export.js
Here, I've learned the difference between default and named exports. Default exports does not include curly braces in them at pwede i-rename kapag iimport na, while Named Exports have curly braces and dapat i-match ang mismong name when importing.

### 16_modules_import.js
Kadugtong 'to ng 15_modulles_export.js. Dito naman natuto ako na i-import yung exports sa previous file. You can rename default imports, but not named imports (it will throw an error).

### 17_logical_operators.js
Natutunan ko na every value has its truthy and falsy values. 0, blank, null, and undefined are falsy, while [], {}, and string are truthy. Another concepts rin na mga natutunan o na-refresh sa akin are the &&, ||, and !. __&&__ (and) is used when you want 2 or more conditions to be satisfied as a true for something to happen. __||__ (or) is when used makes a condition with false and true statements equate to true.  __!__ makes the statement negative/false. || returns the first truthy value or the last value if all are falsy, while yung && naman is nagre-return ng first falsy value or the last value if all are truthy.

### 18_ternary_nullish.js
This covers 3 topics. Yung una is yung Ternary Operator, this makes an if...else blocks into one line. Another is yung Optional Chaining & Nullish Coalescing, ?. safely reads a nested property and stops with undefined instead of throwing while and  ?? supplies a fallback.

### 19_strings_numbers.js
This part covers the strings and numbers operator. For string operator, we have `.trim()`, `.toUpperCase()`, `.includes()`, `.slice()`, and template literals. For numbers, we have `.parseInt()`, `.toFixed()`, and `isNaN()`. These are essential when sanitizing strings and numbers when a user inputs info in a data.

### 20_array_methods.js
In this part, natutunan ko kung pano gumamit ng different JavaScript array methods sa pagprocess and organize ng mga data more efficiently. I practiced using filter() to get students who passed, `find()` to search for a specific student, some() and every() to check conditions within an array, and `sort()` to arrange students according to their grades.

### 21_errors_json.js
Naituro na sa amin last time yung try-catch, pero mas luminaw sya para sa akin ngayon. Nasa try yung mga ipapagawa o ita-try, nasa catch naman yung pang-salo o nagra-run instead of crashing the whole program. Also, there are built-in functions for converting JSON line like `.stringify()` and `.parse().`

### 22_async_javascript.js
Natutunan ko dito yung callbacks and promises. A callback is just a function passed into another function to be run later. A Promise represents a value that isn't ready yet, magagamit ito later on kapag success o failed ang isang task. Ang pinakatumatak sa'kin dito during discussion is yung difference ng asynch functions sa synchronous. Yung synch functions is nagru-run in order, line by line and block ny block, while yung asynch ay pwedeng may unahin munang ibang task habang di pa tapos sa isa.

### 23_closures_scope.js
Na-tackle din dito yung scope ng functions, and nadagdag yung closure. Ginagamit yung closure kapag may kailangan i-remember na isang variable from a scope kung san yon ginawa, kahit na tapos na magrun yung outer function.