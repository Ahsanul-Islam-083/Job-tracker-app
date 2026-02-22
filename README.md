. 
## Answers of the Questions:

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
-with getElementById we can find a single element with the specific "ID" and with the querySelector we can also find a single element but that is the first matching element of the given "tagName", "#ID" or ".class" .Using getElementsByClassName we get a HTMLCollection which is an arrayLike object with a specific "class" and by querySelectorAll we get a NodeList(also an arrayLike object) but it is flexible like the querySelector is also accept any valid css selector.


### 2. How do you create and insert a new element into the DOM?
-First: get the Parent Element -> document.getElementById("parent")
-Second: Create the ELement -> document.createElement("element")
-Third: Writing content inside the newly created Element -> element.innerHtml/Text = `content`
-Fourth: append that Element as a child Into the Parent ->parent.append(element) 


### 3. What is Event Bubbling? And how does it work?
-Event Bubbling is a mechanism in javascript.It is the third phase od event propagation. After the capturing and target phase the event bubbling occurs.
It starts from the target element then propagates upward to it's parent elements all the way up to the root.


### 4. What is Event Delegation in JavaScript? Why is it useful?
-Instead of adding eventListener to multiple child elements attaching a single eventListener to the parent element is called Event Delegation in JS. It is very useful cause this technique is cleaner and also improves performance, it also works with Dynamically created elements.


### 5. What is the difference between preventDefault() and stopPropagation() methods?
-preventDefault() Stops the default behavior for an element.like if there is an anchor tag with a href="google.com" and we use .preventDefault() the < a > will not navigate to Google. On the otherhand stopPropagation() Stops the event from moving to parent elements means it stops the bubbling mechanism.
