# The modal problem

This repo showcases a real problem in our frontend code.
The purpose of this exercise is to:

- Read and understand the requirements described in this readme (ask question if something is not clear!)
- Read, understand and comment the code in the repository
- Come up with a solution and implement it

**There is no exepectation to get to a fully completed and tested implementation.**
**That said it is very important for us listening and discussing your thought process. Be vocal!**

## How is it now

The portal frontend is heavily making use of fairly complex modals but the current modal implementation pose some serious challenges:

- All modals are colocated with the page implementation making the file structure fairly confusing, in particular when they are used across multiple page
- All controls (hide/show, isVisibile) are passed through props drilling forcing the code to be overly verbose

## How we would like it to be

Ideally it would be preferrable to have a centralised system able to control whether a certain modal is visible or not.
It would be important for this new implementation to not depend on props drilling and to heavily reduce the amount of code is currently need for a page or a component to handle a new modal.

A reminder that this approach should support communication to and from any modal. It should be possible to pass information to the Modal and the Modal should be able to pass information back.
