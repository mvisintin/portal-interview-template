# The modal problem

## How is it now

The portal frontend is heavily making use of fairly complex modals but the current modal implementation pose some serious challenges:

- All modals are colocated with the page implementation making the file structure fairly confusing
  - A modal may have multiple "steps" meaning a lot of code that would not normally belong to the page sits inside its directory
  - Some modals are used across multiple page, making the cross reference fairly confusing
- All controls (hide/show, isVisibile) are passed through props drilling forcing the code to be overly verbose

## How we would like it to be

Ideally it would be preferrable to have a centralised system able to control whether a certain modal is visible or not.
It would be important for this new implementation to not depend on props drilling and to heavily reduce the amount of code is currently need for a page or a component to handle a new modal.

A reminder that this approach should support communication to and from any modal. It should be possible to pass information to the Modal and the Modal should be able to pass information back.
