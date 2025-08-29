### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

2. How do you **create and insert a new element into the DOM**?

3. What is **Event Bubbling** and how does it work?

4. What is **Event Delegation** in JavaScript? Why is it useful?

5. What is the difference between **preventDefault() and stopPropagation()** methods?



SOLUTION:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

ANSWER:

1.getElementById is used to select a single element by its ID,IDs are unique.

2.getElementsByClassName returns all elements that have the same class name. It creates a live collection, so the list changes when the page content changes.

3.querySelector and querySelectorAll are more flexible because they work with any CSS selector.

  *querySelector gives the first matching element.

  *querySelectorAll gives all matching elements as a static collection, meaning it does not update automatically if the page changes.


2. How do you **create and insert a new element into the DOM**?

ANSWER:

Steps to create and add content to a new element:
    1.First, create a new element.
    2.Next, add text or attributes to the element.
Steps to insert the element into the DOM:
    1.Using appendChild() adds the element at the end of the parent.
    2.Using prepend() adds the element at the beginning of the parent.
    3.Using insertBefore() adds the element before another element.
    4.Using append() allows adding multiple elements and is commonly used today.



3. What is **Event Bubbling** and how does it work?

ANSWER:

Event Bubbling in JavaScript is a process where an event that happens on a child element moves upwards through its parent elements in the DOM. This allows parent elements to respond to events that happen on their child elements.

How it works:
  1.An event happens on the innermost element, called the target element.
  2.The event first triggers any handlers on the target element itself.
  3.Then, the event bubbles up to its parent elements, triggering handlers on them as well.
  4.This continues up the DOM tree until it reaches the <html> element.
  5.The bubbling can be stopped at any point using event.stopPropagation().



4.What is **Event Delegation** in JavaScript? Why is it useful?
 
ANSWER:

Event Delegation in JavaScript is a technique where we add an event listener to a parent element instead of adding it to each individual child element. Then, when an event happens on a child element, the parent handles it by checking which child triggered the event.

Why it is useful:

  1.Reduces memory usage because you don’t need to attach listeners to every child element.
  2.Works for dynamic elements that are added later to the DOM.
  3.Makes code simpler and easier to manage since you handle events in one place.



5. What is the difference between **preventDefault() and stopPropagation()** methods?

ANSWER:


1. preventDefault():
     1.Stops the default browser action of an event.
     2.Example: Prevents a link from navigating to another page.
     3.Example: Stops a form from submitting automatically.

2. stopPropagation():
     1.Stops the event from bubbling up or capturing down the DOM tree.
     2.Example: Prevents a click on a child element from triggering click events on parent elements.
     3.Controls how events spread between elements.

