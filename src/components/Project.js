<!DOCTYPE html>
<html>
    <body> 
    </body>
        <script>
           let isScreen = true;
           let isSelect = false;
           const section = document.createElement("div");
           section.style.cssText = "width:100%; height:540px; background-color:#B0E0E6";
           const headSection = document.createElement("div");
           headSection.style.cssText = "display:flex; flex-direction:column; justify-content:center; align-items:center; margin:10px";
           const headH2 = document.createElement("h2");
           headH2.innerText = 'What our guests are saying';
           headH2.style.cssText = "margin-bottom:auto";
           headSection.appendChild(headH2);
           const headP1 = document.createElement("p");
           headP1.innerText = `Are you looking for a sign that it's time to travel?`;
           headP1.style.cssText = "font-size:10px";
           headSection.appendChild(headP1);
           const headP2 = document.createElement("p");
           headP2.innerText = `well here it is our ! we ask some of our guests how it feels to travel after so long, and here is what they said`;
           headP2.style.cssText = "margin-top:-10px; font-size:10px";
           headSection.appendChild(headP2);
           section.appendChild(headSection);
           const videoSection = document.createElement("div");
           videoSection.style.cssText = "width:44%; height:300px; margin:auto;";
           const videoIframe = document.createElement("iframe");
           videoIframe.style.cssText = "width:100%; height:300px; border:#E8E8E8; border-radius:10px";
           videoIframe.src = "https://www.youtube.com/embed/PcbHi6OIIIY";
           videoSection.appendChild(videoIframe);
           const bottomSection = document.createElement("div");
           bottomSection.style.cssText = "display:flex; flex-direction:column; justify-content:center; align-items:center;";
           const bottomH2 = document.createElement("h2");
           bottomH2.innerText = 'Feeling inspired?';
           bottomSection.appendChild(bottomH2);
           const bottomButton = document.createElement("button");
           bottomButton.innerText = 'Begin your adventure';
           bottomButton.style.cssText = "padding:10px; background-color:#088F8F; color:#fff; border-style:none; font-size:14px; pointer-events: auto";
           bottomSection.appendChild(bottomButton);
           const mexicoArray = ["Volvo","Saab","Mercades","Audi"];
           const spainArray = ["adarsh","news","use","news"];
           const selectDropdown = document.createElement("select");
           selectDropdown.setAttribute("placeholder", "DESTINATION");
           const selectOptionGroup1 = document.createElement("optgroup");
           selectOptionGroup1.setAttribute("label", "Mexico");
           selectOptionGroup1.style.cssText = "color:#00BFFF";
           selectDropdown.appendChild(selectOptionGroup1);
        //    selectDropdown.appendChild(selectOptionGroup1);
           //Create and append the options
            for (let i = 0; i < mexicoArray.length; i++) {
                const option = document.createElement("option");
                option.value = mexicoArray[i];
                option.text = mexicoArray[i];
                selectDropdown.appendChild(option);
                // selectDiv.appendChild(option);
            }
           const selectOptionGroup2 = document.createElement("optgroup");
           selectOptionGroup2.setAttribute("label", "Spain");
           selectOptionGroup2.style.cssText = "display:inline-block; color:#00BFFF";
         selectDropdown.appendChild(selectOptionGroup2);
           //Create and append the options
            for (let i = 0; i < mexicoArray.length; i++) {
                const option = document.createElement("option");
                option.style.cssText = "display:inline-block"
                option.value = mexicoArray[i];
                option.text = mexicoArray[i];
                selectDropdown.appendChild(option);
                // selectDiv.appendChild(option);
            }
            section.appendChild(videoSection);
            section.appendChild(bottomSection);
            document.body.appendChild(section);
            bottomButton.addEventListener("click", function() {
                document.body.removeChild(section);
                document.body.appendChild(selectDropdown);
            })
        </script>
    </body>
</html>
