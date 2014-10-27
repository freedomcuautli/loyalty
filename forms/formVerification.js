

 var verifyApp = angular.module('checkForm', [])
   .controller('FormController', ['$scope', function($scope) 
   {
     $scope.master = {};
 
     $scope.update = function(user) {
       $scope.master = angular.copy(user);
     };
 
     $scope.reset = function() {
       $scope.user = angular.copy($scope.master);
     };
 
     $scope.isUnchanged = function(user) {
       return angular.equals(user, $scope.master);
     };
 
     $scope.reset();
   }]);
   
   

  
function getStates()
{
//setting up team to league associations
var stateName = document.form.league.value;

//MLB
var sateChosen = new Array("Alabama",
"Alaska",
"Arizona",
"Arkansas",
"California",
"Colorado",
"Connecticut",
"Delaware",
"Florida",
"Georgia",
"Hawaii",
"Idaho",
"Illinois",
"Indiana",
"Iowa",
"Kansas",
"Kentucky",
"Louisiana",
"Maine",
"Maryland",
"Massachusetts",
"Michigan",
"Minnesota",
"Mississippi",
"Missouri",
"Montana",
"Nebraska",
"Nevada",
"New Hampshire",
"New Jersey",
"New Mexico",
"New York",
"North Carolina",
"North Dakota",
"Ohio",
"Oklahoma",
"Oregon",
"Pennsylvania",
"Rhode Island",
"South Carolina",
"South Dakota",
"Tennessee",
"Texas",
"Utah",
"Vermont",
"Virginia",
"Washington",
"West Virginia",
"Wisconsin",
"Wyoming",
	
	
	
	
);

if (leaguename == "MLB")
			{
				var teamsel = mlblge;
				var numteams = mlblge.length;
				
				var makeselect1 = "<select name ='TeamName'><br />";
				makeselect1 += "<option value=''>Select Team</option><br />";
				for (i=0; i<=numteams; i++)
					{ var teamnames = mlblge[i];
					makeselect1 += '<option value="' + teamnames + '">' + teamnames + '</option>';
					}
				makeselect1 += '</select>'; 
				document.getElementById('teamselect').innerHTML = makeselect1;
				
			}
			

function filltext()
{
	var selectedteam = document.form.TeamName.value;
	document.getElementById("teamnametxt").innerHTML = selectedteam;
}