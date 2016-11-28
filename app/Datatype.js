module.exports = {



dataTypes:function(value){
  
  if (typeof(value) == typeof(null)){
  	return "no value";
  }

  else if (typeof(value) == typeof(undefined)){
  	return 'no value';
  }

  else if (typeof(value) == typeof(true)){
  	return value;
  }
  
  else if (typeof(value) == typeof(100)) {
  			if (value < 100){
   				 return 'less than 100';
  				}
  			else if (value > 100){
    			return 'more than 100';
 			    }
  			else{return 'equal to 100';
  				}
  	}

  else if (typeof(value) == typeof('foo')){
  	return value.length;
  }

  else if (typeof(value) == typeof([])) {
  	if (value == []){
  		return 'undefined';
    }
  	else if (value == [4,9]){
  		return 'undefined';
    }
  	else {return value.length;}
  	}
  	}
  }
  
  
  



