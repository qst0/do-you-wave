# do-you-wave
You see the do you wave code. Do you wave?

Outline:

After a short tutorial on how to play prompt the player.

The player is prompted with senarios when they can wave.

Any time is a good time for waving we think.

But the player might not feel that way.

Retort the lack of wave with a chance to recover, or explain the outcome of their action through in-action.

If the player does wave, which we think is great, continue the senario.

When the senario is over prompt the next one.

If the player stops waving long enough they miss their chance to recover.

The program will be confused and restart after waving practice.

Structure:

A senario has a `prompt`, `answers` and `retorts`.

It also holds a number value `recoverable` which is the index up to and including when the player can still wave and answer the senario.

Example:

  "You see your friend, do you wave?"
  
  Answers
    They smile and you enjoy a friendly wave.
    You talk about the importance of waving these days.
  
  Retorts
    Why are you not waving? It's your friend!
    You can really tell it them. They look confused that you're not waving.
    They come give you a disappointed talk about the importance of waving in friendship
  
  Recoverable : 2
  
  
