**GENESIS ARCHITECT**
_A Deterministic Revolution_
v1.0.2 - Minecraft 1.20.1 - Forge 47.4.10

From nothing, make everything.

This fileset does its best to add recipes to as many of the items in Minecraft's library as possible.
Some items have been custom-built to allow a deeper and grander experience.
Custom tags, notification banners, and item logic has been added to enhance the experience.
For organization and clarity, recipe files have been organized by "Age".

Each file will be described briefly:

architect_items:
  - a list of new items within Minecraft's item recipe.
  - in order to work, THIS FILE MUST GO IN
        kubejs > startup_scripts > items >/
  - ALL OTHER FILES MUST GO IN
        kubejs > server_scripts >/
  - * THIS MUST BE SET UP FIRST BEFORE THE GAME IS LAUNCHED *

age_tags:
  - new items and recipes added will be grouped here for clarity.
  - tags can be referenced in the JEI/EMI by searching " #[tag] "

banners:
  - Progression-Notification Banners, added to enhance UX and provide retroactive incentive

custom_item_logic:
  - Added logic to certain custom items to enable non-Vanilla mechanics

age1:
  - Basic handcrafting recipes for working and molding various materials of Stone

age2:
  - Basic handcrafting recipes for creating Crops, Trees, and Biological Matter

age2.5_tinkers_biology:
  - Biological additions from Tinker's Construct, such as Bacon and Ichor.

age3:
  - The beginning of advanced / mechanical crafting, higher-tier materials, mass-production

age3.5_tinkers_metals:
  - Non-biological materials from Tinker's Construct, such as Steel and Cobalt.

age4:
  - Synthesis of autonomic life - Cows, Skeletons, Elder Guardians

age4.5_tinkers_eggs:
  - Spawn Eggs for Tinker's Construct mobs: Terracube, Skyslime, Enderslime.

age5:
  - Invention of magical enhancement through logistical crafting chains

age5.5:
  - Introduction of crafting music through mechanical processes with mixed-tier ingredients

age6:
  - "Resolution" of the game, introduction of "Creative-Adjacent" materials and tools.
