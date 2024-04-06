 import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js'
     import { getDatabase,push,ref,onValue,remove} from 'https://www.gstatic.com/firebasejs/10.10.0/firebase-database.js'
     const appSettings = {
       databaseURL: "https://vnvrkarthik0-default-rtdb.asia-southeast1.firebasedatabase.app/"
     }
     
     const app = initializeApp(appSettings)
     const database = getDatabase(app)
     const users = ref(database)
     var time =1
     onValue(users, snapshot=>{
       $("#refresh").empty()
       $("#inp").val(" ")
       let itemsArray = Object.entries(snapshot.val())
       
       
       
       for(let i =0; i< itemsArray.length;i++){
         
         appendTosec(itemsArray[i],i,itemsArray.length)
        
         
       }
      time++ 
     })
     
     function appendTosec(story,i,len){
      
       let storyId = story[0]
       let storyTitle = story[1]
       let valdiv = $("<div></div>")
       let valsvg = $('<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" height="1.5em" width="1.5em"><path fill="currentColor" d="M13.05 42q-1.2 0-2.1-.9-.9-.9-.9-2.1V10.5H9.5q-.65 0-1.075-.425Q8 9.65 8 9q0-.65.425-1.075Q8.85 7.5 9.5 7.5h7.9q0-.65.425-1.075Q18.25 6 18.9 6h10.2q.65 0 1.075.425.425.425.425 1.075h7.9q.65 0 1.075.425Q40 8.35 40 9q0 .65-.425 1.075-.425.425-1.075.425h-.55V39q0 1.2-.9 2.1-.9.9-2.1.9Zm5.3-8.8q0 .65.425 1.075.425.425 1.075.425.65 0 1.075-.425.425-.425.425-1.075V16.25q0-.65-.425-1.075-.425-.425-1.075-.425-.65 0-1.075.425-.425.425-.425 1.075Zm8.3 0q0 .65.425 1.075.425.425 1.075.425.65 0 1.075-.425.425-.425.425-1.075V16.25q0-.65-.425-1.075-.425-.425-1.075-.425-.65 0-1.075.425-.425.425-.425 1.075Z"/></svg>')
       valdiv.addClass("spanParent")
       let vals = $("<span></span>")
       vals.text(story[1])
    //   vals.addClass("py-3")
       
         vals.dblclick(()=>{
           valdiv.hide(500)
           window.navigator.vibrate(50)
           setTimeout(()=>{
             let exactLocation = ref(database,storyId)
           remove(exactLocation)
           
           },1000)
           
         })
         valsvg.click(()=>{
          valdiv.hide(500)
          window.navigator.vibrate(50)
           setTimeout(()=>{
             let exactLocation = ref(database,storyId)
           remove(exactLocation)
           
           },1000)
         })
         valdiv.append(vals)
         valdiv.append(valsvg)
         
         if(time==1){
         valdiv.hide()
         valdiv.show(((len-i)*100))
         $("#refresh").removeClass("placeholder-wave")
         }
         $("#refresh").append(valdiv)
         console.log(story)
     }
     function rem(storyId){
       let exactLocation = ref(database,storyId)
           remove(exactLocation)
           window.navigator.vibrate(50)
     }
     
     $("#leo").click(()=>{
       
     let text= $("#inp").val()
     window.navigator.vibrate(20)
     if(text!=" "){
     push(users,text)

     console.log(text)
     }else{
       alert("fill")
     }
     })
     
     
     
   