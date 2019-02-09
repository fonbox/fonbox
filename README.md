# FonBox
put your phone in the box and have fun

## Why is this a thing?
[Class project][class_spreadsheet] for Professor Fred Abler's CSC 484 (User-Centered Interface Design and Development)

> **Basic Instructions**
> 1) Make a 12"x12"x12" cardboard box, or can be other materials.
> 2) Give Box an AFFORDANCE, which is a clear invitation to participate. Box may also have additional affordances to keep the user participating (i.e. to make it sticky). Don't forget about emotional aspects as well.
> 3) Make your AFFORDANCE 'sticky' so that people want to use your box as long as possible.

## How does/will it work?
Upon interacting with a cardboard box, a QR code will invite a user to participate by scanning the code. Then the user will be able to access a web interface. The web interface will instruct the user to put the phone in the box. Finally, the phone will serve as a brain in the box using its input and output accessories to interact with the user. 

**What is/are the "invitation(s) to participate?"**
* The "pull to unlock" signifier
* The QR Code

**What are the "emotional aspects?"**
* hmmm... idk

**What makes it "sticky?"**
* FonBox will interact by voice, instructing the user to play/dance/talk/meditate/etc
  * hmm... it would be interesting to test FonBox as a _jukebox_ vs _meditation box_ vs _game box_
  * or is FonBox fun by having different modes (activated by voice command)
* FonBox can reward the user by saying "good job" or "that was fun!"
* FonBox is infinitely updatable, simply by pushing new code to GitHub. Users can anticipate new modes the next time they interact with FonBox.

**What makes it "viral?"**
* The final payoff might be a sharable selfie with the FonBox website.
* User's might be more likely to share their "high score" in a game mode or "length of meditation" (although I would personally have a moral/ethical dilemma with allowing that if the intention is to truly help people increase mindfulness). 


## Is there a box in real life?
> **Here is an image of version 1 of the FonBox**
<img src="https://raw.githubusercontent.com/fonbox/fonbox/master/fonbox_the_box_v1.jpg" alt="a pixture of the real life FonBox" width="500px" height="500px">


## Why is the name weird?
The "funbox" username on GitHub is already taken... [that's just the way it is 🎵][the_way_it_is]

## Will the box use Artificial Intelligence (AI)?
Yes, some simple AI to detect the phone being inside a closed box ( see #6 ). Also, there may be some simple obejct/face detection for a different user flow. 

## What are the lessons from this experiment?
[Check out these issues][lessons_learned] that go into detail about the problems I encountered while UX testing the box with friends. 



<!--- link tags --->

[class_spreadsheet]: https://docs.google.com/spreadsheets/d/1Eyplhlz9zeHBEaIwRIYHkUTHgKzgI83JgV6KKFnPwtY/edit#gid=0

[the_way_it_is]: https://youtu.be/cOeKidp-iWo?t=6

[lessons_learned]: https://github.com/fonbox/fonbox/issues?q=is%3Aopen+is%3Aissue+label%3Alessons_learned
