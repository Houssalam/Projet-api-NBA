const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '64e7c96dd1msh09d0ddb416b4f6bp1a51c8jsn107490c5222a',
		'X-RapidAPI-Host': 'heisenbug-champions-league-live-scores-v1.p.rapidapi.com'
	}
};

const teamsList = document.getElementById('teams-list');

fetch('https://heisenbug-champions-league-live-scores-v1.p.rapidapi.com/api/championsleague/teams', options)
	.then(response => response.json())
	.then(data => {
		// Loop through the teams data and create a list item for each team
		data.teams.forEach(team => {
			const listItem = document.createElement('li');
			const teamName = document.createElement('h2');
			const teamLogo = document.createElement('img');
			const teamVenue = document.createElement('p');

			teamName.textContent = team.name;
			teamLogo.src = team.crestUrl;
			teamLogo.alt = `${team.shortName} logo`;
			teamVenue.textContent = `Stade : ${team.venue}`;

			listItem.appendChild(teamName);
			listItem.appendChild(teamLogo);
			listItem.appendChild(teamVenue);
			teamsList.appendChild(listItem);
		});
	})
	.catch(err => console.error(err));
