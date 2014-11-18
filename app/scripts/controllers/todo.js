'use strict'

angular.module('todoApp')
  .controller("MyCtrl",function($scope,$log){
  	//$scope.toggleComplete=false;
  	//$scope.editorEnabled=false;
  	var col;
	var local = localStorage.getItem("todoList");
	if(local) {
		$scope.todos=JSON.parse(local);					
	} 
	else {
		$scope.todos=[];
	}
	$scope.saveEdited = function() {
		$log.info("hello");
		localStorage.setItem("todoList", JSON.stringify($scope.todos));

	}
	$scope.addItem=function(){
		if($scope.item){
		$scope.todos.push({'title':$scope.item, 'completed':false,'color':col});
		$scope.item='';
		}
		//$log.info($scope.todos);
		localStorage.setItem("todoList", JSON.stringify($scope.todos));
		
	};

	$scope.RemoveItem=function(title){
		for(var i=$scope.todos.length-1;i >=0;i--){
			if($scope.todos[i].title==title){
				
				//$log.info($scope.todos[i]);
				//$log.info($scope.todos);
				var index = $scope.todos.indexOf($scope.todos[i]);
				$scope.todos.splice(index,1);

			}

		}
		localStorage.setItem("todoList", JSON.stringify($scope.todos));
		//$scope.todos.pop(title);  
	};
	$scope.onComplete=function(title, direction){
		//$log.info($scope.todos.length)
		//$log.info($scope.todos)
		for(var i=$scope.todos.length-1;i >=0;i--)		
		{
			//$log.info($scope.todos[i].completed)
			if($scope.todos[i].title==title){
				$scope.todos[i].completed=direction;
			}
		}
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
});	

