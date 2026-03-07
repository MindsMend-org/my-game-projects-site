module.exports = {
  docs: [
    // Optional: keep or add any intro/general docs
    //'intro',  // if you have docs/intro.md

    {
      type: 'category',
      label: 'Projects',
      collapsed: false,  // optional: keep open by default
      items: [
        // Add one line per project you create in CMS
        // The path is relative to docs/ folder — no .md needed
        'projects/retro-4-player-multiplayer-space-game',

        // Add new ones here as you publish them
        // Example when you add another project:
        // 'projects/my-second-game-project',
      ],
    },

    // Optional: if you later create separate .md files for levels/enemies
    // {
    //   type: 'category',
    //   label: 'Levels & Enemies (Example)',
    //   items: [
    //     'projects/level-1',
    //     'projects/level-2',
    //   ],
    // },
  ],
};