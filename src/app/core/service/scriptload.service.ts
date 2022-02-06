import { Injectable } from "@angular/core";

const url = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAMsvTAT7v4Iw5-4gfWbuREnoMIIsRH8m8';

@Injectable()
export class ScriptLoaderService{
    constructor(){}

    loadScript() {
        console.log('preparing to load...')
        if(!this.checkScriptExist()){
        let node = document.createElement('script');
        node.src = url;
        node.type = 'text/javascript';
        node.async = true;
        document.getElementsByTagName('head')[0].appendChild(node);
        }
        
    }

    checkScriptExist():boolean{
        var scripts = document.getElementsByTagName('script');
        for (var i = scripts.length; i--;) {
            if (scripts[i].src == url) {
                return true
            };
        }
        return false;
    }
}