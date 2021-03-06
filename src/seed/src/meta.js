/**
 * @fileOverview module meta info for auto combo
 * @author yiminghe@gmail.com
 */
(function (S) {
    if (S.Loader) {
        S.config({
            packages:{
                gallery:{
                    path:S.Loader.Utils.normalizePath(S.Config.base + '../')
                }
            },
            modules:{
                /****************************
                 * Core
                 ****************************/
                "dom":{
                    requires:["ua"]
                },
                "event":{
                    requires:["dom"]
                },
                "ajax":{
                    requires:["dom", "event", "json"]
                },
                "anim":{
                    requires:["dom", "event"]
                },
                "base":{
                    requires:["event"]
                },
                "node":{
                    requires:["dom", "event", "anim"]
                },
                core:{
                    alias:["dom", "event", "ajax", "anim", "base", "node", "json"]
                },

                /******************************
                 *  Infrastructure
                 ******************************/
                "mvc":{
                    requires:["base", "ajax"]
                },
                "component":{
                    requires:["node"]
                },

                /****************************
                 *  Component
                 ****************************/
                "color":{
                    requires:['base']
                },
                "stylesheet":{
                    requires:['dom']
                },
                "input-selection":{
                    requires:['dom']
                },
                "combobox":{
                    requires:['input-selection', 'menu']
                },
                "button":{
                    requires:["component"]
                },
                "overlay":{
                    requires:["component"]
                },
                "resizable":{
                    requires:["base", "node"]
                },
                "separator":{
                    requires:["component"]
                },
                "menu":{
                    requires:["component", "separator"]
                },
                "toolbar":{
                    requires:["component", "separator"]
                },
                "menubutton":{
                    requires:["menu", "button"]
                },
                "validation":{
                    requires:["node", "ajax"]
                },
                "waterfall":{
                    requires:["node", "base", "ajax"]
                },
                "tree":{
                    requires:["component"]
                },
                "suggest":{
                    requires:["dom", "event"]
                },
                "switchable":{
                    requires:["dom", "event", "anim", "json"]
                },
                "calendar":{
                    requires:["node"]
                },
                "datalazyload":{
                    requires:["dom", "event"]
                },
                "dd":{
                    requires:["node", "base"]
                },
                "flash":{
                    requires:["dom", "json"]
                },
                "imagezoom":{
                    requires:["node", "component"]
                },
                "editor":{
                    requires:['htmlparser', 'overlay', 'menu', 'menubutton', 'button']
                },
                "editor/full":{
                    requires:['htmlparser', 'overlay', 'menu', 'menubutton', 'button']
                }
            }
        });
    }
})(KISSY);
/**
 * TODO: implement conditional loader
 * TODO: should be auto generated by module compiler
 **/