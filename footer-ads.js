document.write(`<style type="text/css">@-webkit-keyframes hades{0%{visibility:visible;-webkit-transform:translateY(100%);transform:translateY(100%)}100%{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes hades{0%{visibility:visible;-webkit-transform:translateY(100%);transform:translateY(100%)}100%{-webkit-transform:translateY(0);transform:translateY(0)}}</style>
<div id="hades" style="display:block;position:fixed;z-index:900;left:0;right:0;bottom:0;background-color:rgba(0,0,0,.4);-webkit-transition:375ms;-moz-transition:375ms;-o-transition:375ms;transition:375ms;-webkit-animation-name:hades;animation-name:hades;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-delay:.5s;animation-delay:.5s;">
	<div style="display:block;position:relative;">
		<div id="hades-ad-slot" style="position:relative;margin:auto;">

			<!-- INIT AD CODE DESKTOP -->

			<scr` + `ipt type="text/javascript">
			google_ad_client = "ca-pub-6005565652389888";
google_ad_slot = "8627231800";

			google_ad_width = (typeof window.innerWidth === "undefined" || window.innerWidth > 728) ? 728 : 320;
			google_ad_height = (typeof window.innerWidth === "undefined" || window.innerWidth > 728) ? 90 : 50;
			document.getElementById('hades-ad-slot').style.width = google_ad_width+'px';
			document.getElementById('hades-ad-slot').style.height = google_ad_height+'px';
			</scr` + `ipt>
			<scr` + `ipt type="text/javascript" src="//pagead2.googlesyndication.com/pagead/show_ads.js"></scr` + `ipt>

			<!-- END AD CODE DESKTOP -->
		</div>

	<span style="display:block;padding:4px 8px;margin:0;position:absolute;top:auto;bottom:100%;right:0;left:auto;cursor:pointer;background-color:rgba(0,0,0,.5);color:#fff;font:400 13px/13px Arial,Helvetica,sans-serif;" onclick="document.getElementById('hades').remove();">close</span>
	</div>
</div>`)