function ADD()
		  {

            var input=document.getElementById('gettingTodo');
			
			var item=input.value;
			if(item=='' || item==null)
			{

				var node=document.createElement('p');
				var content=document.createTextNode("PLEASE ENTER THE TODO * ");
				node.appendChild(content);

				document.getElementById("here").appendChild(node);
				//document.body.insertBefore(node,later);
				
			}
			else{
				var textNode= document.createTextNode(item);
			
            var ul=document.getElementById("list");
                     //create li
            var  li=document.createElement('li');
					  //create input_checkbox
					
            var checkbox=document.createElement('input')
            checkbox.type="checkbox";
            checkbox.setAttribute('id','check');
					 //create label
            var label=document.createElement('label');
			label.setAttribute('id','label');

			
		   
			li.appendChild(checkbox);                 //1
			label.appendChild(textNode);
            li.appendChild(label);                   //2
			ul.appendChild(li);
			
			 
			 
			
             //document.getElementById("list").appendChild(ul);
              ul.insertBefore(li,ul.childNode[0]);
			}		
			
			
		 }
		 function REMOVE()
		 {
			 	
            var ul=document.getElementById("list");
			var li=ul.children;
			
			for (let index = 0; index < li.length; index++) 
			{     
				 
				
				  while( li[index].children[0].checked)
				
				   {
					   ul.removeChild(li[index]);
					  
				   }
				 
			}
		 }
		 
		 
		 function REMOVE_ALL()
		 {
			 	
            var ul=document.getElementById("list");
			var li=ul.children;
			
			for (let index = 0; index < li.length; index++) 
			{     
				 
				    while(li[index])
					   ul.removeChild(li[index]);	   
				 
			}
		 }

		