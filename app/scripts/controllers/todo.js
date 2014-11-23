'use strict'

angular.module('todoApp')
  .controller("MyCtrl",function($scope,$log){
  	var col;
  	var proj;
  	
  	//$log.info($scope.hideDesc);
  	//$scope.searchProject=null;
  	//$scope.project='y';
  	//var proj="Default";
  	//$scope.filterColor='white';
	var local = localStorage.getItem("todoList");
	if(local) {
		$scope.todos=JSON.parse(local);					
	} 
	else {
		$scope.todos=[];
	}
	var local = localStorage.getItem("displayType");
	if(local) {
		$scope.descriptionValue=JSON.parse(local);					
	} 
	else {
		$scope.descriptionValue=false;
	}	
		$log.info($scope.descriptionValue);
	
	var state = localStorage.getItem("projList");
	if(state) {
		$scope.projs=JSON.parse(state);					
	} 
	else {
		$scope.projs=[];
		var projId;
		projId=Math.floor(Math.random() * 100000);
		$scope.projs.push({'projName':'Default','id':projId});
		localStorage.setItem("projList", JSON.stringify($scope.projs));
	}
	$scope.project=$scope.projs[0];
	//$scope.searchProject=$scope.projs[0];
	$scope.saveEdited = function() {
		//$log.info("hello");
		localStorage.setItem("todoList", JSON.stringify($scope.todos));

	};
	
	$scope.addItem=function(){
		if($scope.item){
		var unique;
		unique=Math.floor(Math.random() * 10000);

		//hash = md5(unique + $scope.item)
		$log.info(unique);
		$scope.todos.push({'id':unique,'title':$scope.item, 'completed':false,'color':col, 
							'desc':$scope.description, 'projectId':$scope.project.id});
		$scope.item='';
		$scope.description='';
		
		}
		$scope.showDescbtn=false;

		//$log.info($scope.todos);
		localStorage.setItem("todoList", JSON.stringify($scope.todos));

	};

	$scope.RemoveItem=function(identifier){
		//for(var i=$scope.todos.length-1;i >=0;i--){
			//if($scope.todos[i].title==title){
				
				//$log.info($scope.todos[i]);
				//$log.info($scope.todos);
				//var index = $scope.todos.indexOf($scope.todos[i]);
				// $log.info(identifier);
				// for(var i=$scope.todos.length-1;i >=0;i--){
				// 	var todo = $scope.todos[i];
				// 	if($scope.todos[i].id==identifier){
				// 		$scope.todos.splice(i,1);
				// 	}
				// }
				_.remove($scope.todos, function(todo){return todo.id==identifier})
				
				//$scope.todos.splice(index,1);
				//$log.info($scope.todos);
			//}

		//}
		localStorage.setItem("todoList", JSON.stringify($scope.todos));
		//$scope.todos.pop(title);  
	};
	$scope.onComplete=function(identifier, direction){
		//$log.info($scope.todos.length)
		//$log.info($scope.todos)
		//for(var i=$scope.todos.length-1;i >=0;i--)		
		//{
			//$log.info($scope.todos[i].completed)
			//if($scope.todos[i].title==title){
				$log.info(identifier);
				for(var i=$scope.todos.length-1;i >=0;i--){
					if($scope.todos[i].id==identifier){
						$scope.todos[i].completed=direction;
					}
				}
		//}
		localStorage.setItem("todoList", JSON.stringify($scope.todos));
	};
	// $scope.onIncomplete=function(title){

	// 	for(var i=$scope.todos.length-1;i>=0;i--){
	// 		if($scope.todos[i].title==title){
	// 			$scope.todos[i].completed=false;
	// 		}
	// 	}
	// };
		

//$scope.message="Hello";
	$scope.setColor=function(bgColor){
		col=bgColor;
		
	};
	$scope.toggleVisible=function(){
		var count=0;
		for(var i=$scope.todos.length-1;i>=0;i--){
			if($scope.todos[i].completed==true){
				count++;
			}
		}
		if(count==0){
			return false;
		}
		else{
			return true;
		}

	};
	
	/*$scope.colorFilter=function(selectedColor){
		//var count=0;
		for(var i=$scope.todos.length-1;i>=0;i++){
			if($scope.todos[i].color==filtered){
				count++;
			}
		}
	};*/
	$scope.setProj=function(){
		if($scope.projectBox){
			var projId;
			projId=Math.floor(Math.random() * 100000);
			$scope.projs.push({'projName':$scope.projectBox,'id':projId});
			$scope.projectBox='';
		}
		localStorage.setItem("projList", JSON.stringify($scope.projs));
	};
	$scope.showDropdown=function(){
		//$log.info($scope.project);
		$log.info($scope.searchProject);
	};
	$scope.getProjectname=function(identifier){
		for(var i=0;i<$scope.projs.length;i++){
			if($scope.projs[i].id==identifier){
				return $scope.projs[i].projName ;
			}
		}
	};

	$scope.showValue=function(){
		$log.info($scope.filterColorBTn);
	};
	$scope.hideDescription=function(value){
		
		$scope.descriptionValue=value;
		localStorage.setItem("displayType", JSON.stringify($scope.descriptionValue));
	};
});	

