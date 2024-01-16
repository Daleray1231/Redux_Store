# State Challenge: Redux Store (Extra Credit)

## Introduction

In this module, you learned how to manage global state using React’s Context API. The Context API is gaining traction as an alternative or successor to other libraries like Flux or MobX. However, Redux remains the industry standard for managing complex state in a large-scale React application. This challenge invites you to refactor the e-commerce platform from [Activity 26](Links to an external site.) so that it uses Redux.

## Challenge Overview

Your challenge this week is to refactor the e-commerce platform to use Redux. While you won't need to make sweeping changes to the code, you will need to read through the Redux documentation on your own to find the information you need. We’ve provided some guidelines to point you in the right direction in the Getting Started section below.

### ON THE JOB

Web developers are frequently asked to dive into a new technology to solve a problem. Their only roadmap is the tool’s documentation, and they must sift through it to find the information that matches the specific problem they’re trying to solve. As you get ready to enter your first development role, use this Challenge to practice a skill you’ll use many times over the course of your career.

## End of text box.

Remember, this module's Challenge is extra credit. It is not required for submission, nor will it count towards one of the two assignments that you can skip. If you choose to submit this Challenge, you will receive extra credit points on your final grade. However, if you choose not to submit it, your final grade will not be affected in any way. This Challenge is an opportunity for you to further practice your skills and get feedback on it, with the added incentive of receiving extra credit for the work.

## User Story

**AS a senior engineer working on an e-commerce platform**  
**I WANT my platform to use Redux to manage global state instead of the Context API**  
**SO THAT my website's state management is taken out of the React ecosystem**

## Acceptance Criteria
**GIVEN** an e-commerce platform that uses Redux to manage global state

1. **WHEN** I review the app’s store
   - **THEN** I find that the app uses a Redux store instead of the Context API

2. **WHEN** I review the way the React front end accesses the store
   - **THEN** I find that the app uses a Redux provider

3. **WHEN** I review the way the app determines changes to its global state
   - **THEN** I find that the app passes reducers to a Redux store instead of using the Context API

4. **WHEN** I review the way the app extracts state data from the store
   - **THEN** I find that the app uses Redux instead of the Context API

5. **WHEN** I review the way the app dispatches actions
   - **THEN** I find that the app uses Redux instead of the Context API

<br><br>

# Getting Started

To add Redux to your application, read through the [Redux basic tutorial](Links to an external site.) for instructions. Note that the docs will refer to additional packages that you'll need in order to complete this implementation.

**IMPORTANT:** Make sure you look through all of the documentation because there are newer methods that can make these tools much easier to implement. Keep in mind that React has gone through several iterations; as such, some React-and-Redux tutorials will assume you aren't using Hooks.