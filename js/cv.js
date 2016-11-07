(function() {
  // Initialize Share-Buttons
  $.contactButtons({
    effect  : 'slide-on-scroll',
    buttons : {
      'facebook':   { class: 'facebook',            use: true, link: 'https://www.facebook.com/jesper.hansen.75873', extras: 'target="_blank"' },
      'twitter':    { class: 'twitter',             use: true, link: 'https://twitter.com/JesperHansen17', icon: 'twitter', extras: 'target="_blank"'},
      'linkedin':   { class: 'linkedin',            use: true, link: 'https://au.linkedin.com/in/jesperpetergabrielhansen', extras: 'target="_blank"' },
      'mybutton':   { class: 'git',                 use: true, link: 'https://www.github.com/jesperhansen17', icon: 'github', title: 'My title for the button', extras: 'target="_blank"' },
      'email':      { class: 'email separated',     use: true, link: 'hansen.jesper17@gmail.com' }
    }
  });

  var resume = angular.module('resume', [ ]);

  resume.controller('SkillsController', function() {
    this.skillList = getSkills;
    this.skillFilter = null;
  });

  var getSkills = [
    {
      title: 'HTML',
      rating: 5
    },
    {
      title: 'CSS',
      rating: 3
    },
    {
      title: 'JavaScript',
      rating: 3
    },
    {
      title: 'AngularJS',
      rating: 3
    },
    {
      title: 'BackboneJS',
      rating: 2
    },
    {
      title: 'Bootstrap',
      rating: 4
    },
    {
      title: 'jQuery',
      rating: 3
    },
    {
      title: 'SQL',
      rating: 3
    },
    {
      title: 'Java',
      rating: 5
    },
    {
      title: 'C++',
      rating: 4
    },
    {
      title: 'C',
      rating: 4
    },
    {
      title: 'Python',
      rating: 3
    },
    {
      title: 'Arduino',
      rating: 4
    },
    {
      title: 'Android',
      rating: 3
    },
    {
      title: 'Electronics',
      rating: 3
    },
    {
      title: 'UML',
      rating: 3
    },
    {
      title: 'Agile Development',
      rating: 3
    },
    {
      title: 'Simulink',
      rating: 2
    },
    {
      title: 'Unit Testing',
      rating: 3
    },
    {
      title: 'MCV Pattern',
      rating: 3
    },
    {
      title: 'Builder Pattern',
      rating: 3
    },
    {
      title: 'Signal Processing',
      rating: 4
    },
	{
		title: 'C#/.NET',
		rating: 3
	},
	{
		title: 'AEM',
		rating: 3
	},
	{
		title: 'Java Content Repository',
		rating: 3
	},
	{
		title: 'OSGI',
		rating: 3
	}
  ]

})();
