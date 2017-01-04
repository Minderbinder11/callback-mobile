var data = {};

data.fakeUsers = [
  { username: 'Joosang', password: '123'}
]

data.fakeActions = [
  {
    id: 1,
    user_id: 1,
    job_id: 1,
    scheduled_time: '2016-12-24 07:21:30',
    completed_time: null,
    created_at: null,
    action_type: 'user',
    // may be type instead of action - will determine the icon
    action: 'apply',
    action_details: 'Submit online application for Netbase - Software Developer',
    company: 'NetBase Solutions'
  },
  {
    id: 2,
    user_id: 1,
    job_id: 2,
    scheduled_time: '2016-12-28 07:21:30',
    completed_time: null,
    created_at: null,
    action_type: 'user',
    action: 'phone',
    action_details: 'Call Sandy for coffee meeting',
    company: 'Reformation'
  },
  {
    id: 3,
    user_id: 1,
    job_id: null,
    scheduled_time: '3 Jan 2017 07:21:30 GMT',
    completed_time: null,
    created_at: null,
    action_type: 'user',
    action: 'review',
    action_details: 'Review Jobs',
    company: null
  },
  {
    id: 4,
    user_id: 1,
    job_id: 1,
    scheduled_time: '23 Dec 2016 07:21:30 GMT',
    completed_time: '24 Dec 2016 07:21:30 GMT',
    created_at: null,
    action_type: 'auto',
    action: 'review',
    action_details: 'Saved job: Netbase Solutions - Software Developer Intern',
    company: 'NetBase Solutions'
  },
  {
    id: 5,
    user_id: 1,
    job_id: 3,
    scheduled_time: '21 Dec 2016 07:21:30 GMT',
    completed_time: '22 Dec 2016 07:21:30 GMT',
    created_at: null,
    action_type: 'auto',
    action: 'review',
    action_details: 'Saved job: Skyhigh Networks - Software Developer Intern',
    company: 'Skyhigh Networks'
  },
  {
    id: 6,
    user_id: 1,
    job_id: 3,
    scheduled_time: '2016-12-22 07:21:30',
    completed_time: '23 Dec 2016 07:21:30 GMT',
    created_at: null,
    action_type: 'user',
    action: 'apply',
    action_details: 'Submit online application for Skyhigh Networks - Software Developer Intern',
    company: 'Skyhigh Networks'
  },
  {
    id: 7,
    user_id: 1,
    job_id: 3,
    scheduled_time: '3 Jan 2017 07:21:30 GMT',
    completed_time: null,
    created_at: null,
    action_type: 'user',
    action: 'phone',
    action_details: 'Phone interview for Skyhigh Networks - Software Developer Intern',
    company: 'Skyhigh Networks'
  },
  {
    id: 8,
    user_id: 1,
    job_id: null,
    scheduled_time: '5 Jan 2017 07:21:30 GMT',
    completed_time: null,
    created_at: null,
    action_type: 'user',
    action: 'meetup',
    action_details: 'Hacking Meetup - Coding and Wings',
    company: null
  },
  {
    id: 9,
    user_id: 1,
    job_id: 2,
    scheduled_time: '2017-01-10 07:21:30',
    completed_time: null,
    created_at: null,
    action_type: 'user',
    action: 'interview',
    action_details: 'Interview for Reformation - Javascript Developer',
    company: 'Reformation'
  }
]

data.fakeJobs = [
 {
    id: 1,
    user_id: 1,
    parameter_id: 1,parameter_id: 1,
    job_title: "Web Developer Intern",
    "company": "NetBase Solutions",
    "city": "Santa Clara",
    "state": "CA",
    "country": "US",
    formatted_location: "Santa Clara, CA",
    "source": "Indeed",
    "date": "Fri, 02 Dec 2016 07:21:30 GMT",
    "snippet": "Our company is looking for Web developer who has: * Excellent programming skills and in-depth knowledge of HTML/CSS/Javascript. * Knowledge of Wordpress is a",
    "url": "http://jobz.mooo.com:3000/jobs/1",
    "onmousedown": "indeed_clk(this,'479');",
    "latitude": 37.35165,
    "longitude": -121.95605,
    "jobkey": "ecba56aae8b167db",
    "sponsored": false,
    "expired": false,
    "indeedApply": true,
    "formattedLocationFull": "Santa Clara, CA 95054",
    "formattedRelativeTime": "24 days ago",
    "stations": "",
    reviewed: true
  },
  {
    id: 2,
    user_id: 1,
    parameter_id: 1,
    job_title: "JavaScript Developer",
    "company": "Reformation",
    "city": "Los Gatos",
    "state": "CA",
    "country": "US",
    formatted_location: "Los Gatos, CA",
    "source": "Reformation",
    "date": "Wed, 14 Dec 2016 20:54:50 GMT",
    "snippet": "Good understanding of <b>JavaScript</b> frameworks such as AngularJS/ReactJS but proficiency with pure <b>javascript</b> applications as well....",
    "url": "http://www.indeed.com/viewjob?jk=e9d071a05d24e57c&qd=2D1SbNY9kR4nE7Vic078uECecHLgaHZkognc9Aw3-lq00Y2_gj98roOEvZ5dcskX_mVwn7KCs8LzIkVagHRsj7Mf_ojsScrcTKRH8kxZPkyQhwggWUZEvHtN5OcDtAPb&indpubnum=3095704304706909&atk=1b4uog094afm28nb",
    "onmousedown": "indeed_clk(this,'479');",
    "latitude": 37.225273,
    "longitude": -121.97253,
    "jobkey": "e9d071a05d24e57c",
    "sponsored": false,
    "expired": false,
    "indeedApply": true,
    "formattedLocationFull": "Los Gatos, CA",
    "formattedRelativeTime": "12 days ago",
    "stations": "",
    reviewed: true
  },
  {
    id: 3,
    user_id: 1,
    parameter_id: 1,
    job_title: "Intern - Software Development Engineer in Test (SDET)",
    "company": "Skyhigh Networks",
    "city": "Campbell",
    "state": "CA",
    "country": "US",
    formatted_location: "Campbell, CA",
    "source": "Skyhigh Networks",
    "date": "Wed, 14 Dec 2016 01:45:26 GMT",
    "snippet": "Proficient in <b>Javascript</b>, Java, or Python. HTML, CSS, <b>JavaScript</b>, jQuery, HTTP protocol, REST API, cookies/sessions, browser differences....",
    "url": "http://www.indeed.com/viewjob?jk=63f6adb4003fdbc0&qd=2D1SbNY9kR4nE7Vic078uECecHLgaHZkognc9Aw3-lq00Y2_gj98roOEvZ5dcskX_mVwn7KCs8LzIkVagHRsj7Mf_ojsScrcTKRH8kxZPkyQhwggWUZEvHtN5OcDtAPb&indpubnum=3095704304706909&atk=1b4uog094afm28nb",
    "onmousedown": "indeed_clk(this,'479');",
    "latitude": 37.277473,
    "longitude": -121.95055,
    "jobkey": "63f6adb4003fdbc0",
    "sponsored": false,
    "expired": false,
    "indeedApply": true,
    "formattedLocationFull": "Campbell, CA 95008",
    "formattedRelativeTime": "12 days ago",
    "stations": "",
    reviewed: true
  },
  {
    id: 4,
    user_id: 1,
    parameter_id: 1,
    job_title: "Web Developer - Full Stack Software Engineer",
    "company": "BetterHelp",
    "city": "Sunnyvale",
    "state": "CA",
    "country": "US",
    formatted_location: "Sunnyvale, CA",
    "source": "BetterHelp",
    "date": "Sun, 27 Nov 2016 09:42:20 GMT",
    "snippet": "You will use CSS and <b>Javascript</b> to complete functionality of new products. What do we do and why join us?...",
    "url": "http://www.indeed.com/viewjob?jk=a879987047259e2f&qd=2D1SbNY9kR4nE7Vic078uECecHLgaHZkognc9Aw3-lq00Y2_gj98roOEvZ5dcskX_mVwn7KCs8LzIkVagHRsj7Mf_ojsScrcTKRH8kxZPkyQhwggWUZEvHtN5OcDtAPb&indpubnum=3095704304706909&atk=1b4uog094afm28nb",
    "onmousedown": "indeed_clk(this,'479');",
    "latitude": 37.368134,
    "longitude": -122.03297,
    "jobkey": "a879987047259e2f",
    "sponsored": false,
    "expired": false,
    "indeedApply": true,
    "formattedLocationFull": "Sunnyvale, CA",
    "formattedRelativeTime": "29 days ago",
    "stations": "",
    reviewed: false
  },
  {
    id: 5,
    user_id: 1,
    parameter_id: 1,
    job_title: "MTS Front End Engineer",
    "company": "eBay",
    "city": "San Jose",
    "state": "CA",
    "country": "US",
    formatted_location: "San Jose, CA",
    "source": "eBay",
    "date": "Fri, 23 Dec 2016 07:29:11 GMT",
    "snippet": "Expert level knowledge of web technologies to include HTML 4/5, CSS 2/3, <b>Javascript</b>, Ajax and NodeJS. Primary Job Responsibilities:....",
    "url": "http://www.indeed.com/viewjob?jk=90b1d0a7f0dc4156&qd=2D1SbNY9kR4nE7Vic078uECecHLgaHZkognc9Aw3-lq00Y2_gj98roOEvZ5dcskX_mVwn7KCs8LzIkVagHRsj7Mf_ojsScrcTKRH8kxZPkyQhwggWUZEvHtN5OcDtAPb&indpubnum=3095704304706909&atk=1b4uog094afm28nb",
    "onmousedown": "indeed_clk(this,'479');",
    "latitude": 37.337914,
    "longitude": -121.89011,
    "jobkey": "90b1d0a7f0dc4156",
    "sponsored": false,
    "expired": false,
    "indeedApply": false,
    "formattedLocationFull": "San Jose, CA",
    "formattedRelativeTime": "3 days ago",
    "stations": "",
    reviewed: false
  },
  {
    id: 6,
    user_id: 1,
    parameter_id: 1,
    job_title: "Software Engineer, AWS/Cloud Stack",
    "company": "realtor.com",
    "city": "Santa Clara",
    "state": "CA",
    "country": "US",
    formatted_location: "Santa Clara, CA",
    "source": "realtor.com",
    "date": "Wed, 21 Dec 2016 02:34:08 GMT",
    "snippet": "Java, JQuery, Node JS, Python, <b>JavaScript</b>, CSS, HTML5, AWS, MVC, API, Ruby on rails, SQL, Full stack development....",
    "url": "http://www.indeed.com/viewjob?jk=3eec5e074e050944&qd=2D1SbNY9kR4nE7Vic078uECecHLgaHZkognc9Aw3-lq00Y2_gj98roOEvZ5dcskX_mVwn7KCs8LzIkVagHRsj7Mf_ojsScrcTKRH8kxZPkyQhwggWUZEvHtN5OcDtAPb&indpubnum=3095704304706909&atk=1b4uog094afm28nb",
    "onmousedown": "indeed_clk(this,'479');",
    "latitude": 37.35165,
    "longitude": -121.95055,
    "jobkey": "3eec5e074e050944",
    "sponsored": false,
    "expired": false,
    "indeedApply": true,
    "formattedLocationFull": "Santa Clara, CA",
    "formattedRelativeTime": "5 days ago",
    "stations": "",
    reviewed: false
  },
  {
    id: 7,
    user_id: 1,
    parameter_id: 1,
    job_title: "Senior Front End Engineer",
    "company": "Atypon Systems, Inc",
    "city": "Santa Clara",
    "state": "CA",
    "country": "US",
    formatted_location: "Santa Clara, CA",
    "source": "Atypon Systems, Inc",
    "date": "Sat, 17 Dec 2016 10:12:48 GMT",
    "snippet": "Understanding <b>JavaScript</b> on the language level, and use its capabilities efficiently. Solid understanding of web technologies, how web pages/applications are...",
    "url": "http://www.indeed.com/viewjob?jk=7064d49b612c9a88&qd=2D1SbNY9kR4nE7Vic078uECecHLgaHZkognc9Aw3-lq00Y2_gj98roOEvZ5dcskX_mVwn7KCs8LzIkVagHRsj7Mf_ojsScrcTKRH8kxZPkyQhwggWUZEvHtN5OcDtAPb&indpubnum=3095704304706909&atk=1b4uog094afm28nb",
    "onmousedown": "indeed_clk(this,'479');",
    "latitude": 37.4063,
    "longitude": -121.97655,
    "jobkey": "7064d49b612c9a88",
    "sponsored": false,
    "expired": false,
    "indeedApply": true,
    "formattedLocationFull": "Santa Clara, CA 95054",
    "formattedRelativeTime": "9 days ago",
    "stations": "",
    reviewed: false
  },
  {
    id: 8,
    user_id: 1,
    parameter_id: 1,
    job_title: "Responsive Front-End Engineer",
    "company": "Cisco Systems, Inc.",
    "city": "San Jose",
    "state": "CA",
    "country": "US",
    formatted_location: "San Jose, CA",
    "source": "Cisco Systems",
    "date": "Fri, 09 Dec 2016 00:45:42 GMT",
    "snippet": "Experience with relevant front-end technologies—HTML, <b>JavaScript</b>, CSS, Node.js, React.js. Additional Location(s) or Information:....",
    "url": "http://www.indeed.com/viewjob?jk=a6fe9078a700356b&qd=2D1SbNY9kR4nE7Vic078uECecHLgaHZkognc9Aw3-lq00Y2_gj98roOEvZ5dcskX_mVwn7KCs8LzIkVagHRsj7Mf_ojsScrcTKRH8kxZPkyQhwggWUZEvHtN5OcDtAPb&indpubnum=3095704304706909&atk=1b4uog094afm28nb",
    "onmousedown": "indeed_clk(this,'479');",
    "latitude": 37.337914,
    "longitude": -121.89011,
    "jobkey": "a6fe9078a700356b",
    "sponsored": false,
    "expired": false,
    "indeedApply": false,
    "formattedLocationFull": "San Jose, CA",
    "formattedRelativeTime": "17 days ago",
    "stations": "",
    reviewed: false
  },
  {
    id: 9,
    user_id: 1,
    parameter_id: 1,
    job_title: "UI Engineer",
    "company": "Vectra Networks",
    "city": "San Jose",
    "state": "CA",
    "country": "US",
    formatted_location: "San Jose, CA",
    "source": "Vectra Networks",
    "date": "Wed, 23 Nov 2016 20:27:46 GMT",
    "snippet": "Python, <b>JavaScript</b>, HTML, CSS, Experience with a major web framework, preferably Python based (i.e. Fluent and detailed knowledge of current CSS, HTML5,...",
    "url": "http://www.indeed.com/viewjob?jk=467daeb24a300ebb&qd=2D1SbNY9kR4nE7Vic078uECecHLgaHZkognc9Aw3-lq00Y2_gj98roOEvZ5dcskX_mVwn7KCs8LzIkVagHRsj7Mf_ojsScrcTKRH8kxZPkyQhwggWUZEvHtN5OcDtAPb&indpubnum=3095704304706909&atk=1b4uog094afm28nb",
    "onmousedown": "indeed_clk(this,'479');",
    "latitude": 37.317863,
    "longitude": -121.94845,
    "jobkey": "467daeb24a300ebb",
    "sponsored": false,
    "expired": false,
    "indeedApply": true,
    "formattedLocationFull": "San Jose, CA 95128",
    "formattedRelativeTime": "30+ days ago",
    "stations": "",
    reviewed: false
  }
]

// // try db
// fetch('http://jobz.mooo.com:3000/jobs/1')
//       .then((response) => response.json())
//       .then((responseJson) => {
//         console.log('response', responseJson.Jobs)
//         data.realJobs = responseJson.Jobs;
//       })
//       .catch((error) => {
//         console.error(error);
//       });


module.exports = data