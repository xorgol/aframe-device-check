// Disable VR button on touch devices
    AFRAME.registerComponent('device-check', 
		{
			init: function () 
			{
				async function getXR(){

				
				var readout = document.querySelector("#device");
				var resultString ="";
				if (AFRAME.utils.device.checkHeadsetConnected ())
				{
					resultString += "device connected.<BR>";
          //document.querySelector('a-scene').setAttribute('vr-mode-ui', 'enabled', 'true');
				}
				else
				{
					resultString += "device not connected.<BR>";
            document.querySelector('a-scene').setAttribute('vr-mode-ui', 'enabled', 'false');
            
				}
				if (AFRAME.utils.device.isMobile ())
				{
					resultString += "mobile device.<BR>";
          document.querySelector('a-scene').setAttribute('vr-mode-ui', 'enabled', 'false');
				}
				else
				{
					resultString += "not a mobile device.<BR>";
				}
				if (navigator.xr) 
				{
					resultString += "WebXR can be used, ";
					const isSupported = await navigator.xr.isSessionSupported('immersive-vr');
					if (isSupported) {
						resultString += "headset connected.";
            document.querySelector('a-scene').setAttribute('vr-mode-ui', 'enabled', 'true');
					} 
          else {
						resultString += "no headset connected.";

					}		
        }
        else {
					resultString += "WebXR isn't available";

				}

        if(AFRAME.utils.device.checkHeadsetConnected () && AFRAME.utils.device.isMobile ())
        {
          //Should disable buttons on Chrome for Android
          document.querySelector('a-scene').setAttribute('vr-mode-ui', 'enabled', 'false');
        }
				resultString += "<BR><BR>"
				resultString += navigator.userAgent;
				readout.innerHTML = resultString;
				}
				getXR();
			}
		});
