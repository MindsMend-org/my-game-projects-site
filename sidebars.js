module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Projects',
      collapsed: false,
      items: [
        {
          type: 'link',
          label: 'Projects Overview',
          href: '/docs/projects',  // ← direct href to force the route
        },
        'projects/retro-4-player-multiplayer-space-game',
      ],
    },
  ],
};