# Encounter System Demo and Explanation
In this post I will demonstrate the enemy encounter management system I created for my capstone game, SYNC.  This demo will show the system as it was at the end of last semester.

This video is a demo showing all the functionality this system provides.  First, the player walks into the encounter space and the doors close.  Then, multiple distinct waves of enemies spawn from three spawners placed in the area.  Once all waves are cleared, the doors open again.
<iframe src="https://drive.google.com/file/d/1ZvndhDdreDsatv3HbPTyHfFCPWWF3Z8V/preview" width="640" height="480" allow="autoplay"></iframe>
This system uses the following Blueprint classes:

## BP_EncounterArea

Actor with a box trigger component, which must cover the encounter space.  Contains references to all doors, spawners, and enemies in the area.  Enemies placed within the area by the level designer are registered to the area when the level loads.  When the player enters the trigger, it toggles the state of all doors, and tells all spawners to begin spawning enemies.

## BP_EnemySpawner

Stores a list of waves which the spawner will spawn during the encounter.  Waves are represented by a struct which contains a list of enemies to spawn (by class reference), and a delay between enemy spawns (in seconds, as a float).

The following is a video of the setup process for the encounter system:
<iframe src="https://drive.google.com/file/d/1vf4O0AdzLMBIJlkuMMAaCjuyXQvX7zXa/preview" width="640" height="480" allow="autoplay"></iframe>
