'use strict';

const runCssNavigateur = $(function(){
  

      // definition des variable du fichierHome ejs 
      var body           = $('#BoDy'),
          fieldHeader    = $('#fieldHeader'),
          fieldHeadmLogo = $('.mLogo'),
          headImg        = $('#headImg'),
          labTitr        = $('#labTitr'),
          header         = $('#header'),
          headerUl       = $('#header ul'),
          headerUlLi     = $('#header ul li'),
          headerUlLiA    = $('#header ul li a'),
          headerUlLi1    = $('#headerl1'),
          headerUlLi1a   = $('#headerl1 a'),
          headerUlLi2    = $('#headerl2'),
          headerUlLi2a   = $('#headerl2 a'),
          headerUlLi3    = $('#headerl3'),
          headerUlLi3a   = $('#headerl3 a'),
          headerUlLi4    = $('#headerl4'),
          headerUlLi4a   = $('#headerl4 a'),
          headerUlLi5    = $('#headerl5'),
          headerUlLi5a   = $('#headerl5 a'),
          pInfo          = $('#pInfo'),
          login          = $('#login'),
          logLab1        = $('#loglab1'),
          logLab1a       = $('#loglab1 a'),
          logLab2        = $('#loglab2'),
          logLab2a       = $('#loglab2 a'),
          reseauxS       = $('#reseauSociaux'),
          reseauxSul     = $('#reseauSociaux ul'),
          reseauxSli     = $('#reseauSociaux ul li'),
          reseauxSli1    = $('#reseauSLi1'),
          reseauxSli1A   = $('#reseauSLi1 a'),
          reseauxSli2    = $('#reseauSLi2'),
          reseauxSli2A   = $('#reseauSLi2 a'),
          reseauxSli3    = $('#reseauSLi3'),
          reseauxSli3A   = $('#reseauSLi3 a'),
          reseauxSA      = $('#reseauSociaux ul li a'),
          autoDiv        = $('#autoDiv'),
          autoDivUl      = $('#autoDiv ul'),
          autoDivUlLi    = $('#autoDiv ul li'),
          autoDivUlLiA   = $('#autoDiv ul li a'),
          autoDivA0      = $('#autoA0'),
          img0           = $('.img0'),
          overPic        = $('.overPic'),
          overPic1       = $('.overPic1'),
          imgDoc         = $('#imgDoc'),
          imgDocUl       = $('#imgDoc ul'),
          imgDocUlLi     = $('#imgDoc ul li'),
          imgDocUlLiA    = $('#imgDoc ul li a'),
          labelTitr0     = $('.labelTitr0'),
          labelTitr1     = $('.labelTitr1'),
          img1           = $('#img1 '),
          autoField      = $('#autoField'),
          autoField1     = $('#autoField1');

      let winD = $(window);

/*
########################################################################################

  ####################  OPERA MIN VERSION MOBILE ET DESKTOP ######################### 

########################################################################################
*/
  if((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1 ) 
  {
    alert('Opera');
  }
/* ----------------------------$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$--------------------------------
  **************************** FIN DE LA PARTIE D'OPERA MINI    *******************************
----------------------------$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$--------------------------------*/

/*
#################################################################################################

#########################    GOOGLE-CHROME VERSION MOBILE ET DESKTOP    ######################### 

#################################################################################################
*/
  else if(navigator.userAgent.indexOf("Chrome") != -1 )
  {

/*



#################################################################################################

#########################    GOOGLE-CHROME VERSION MOBILE ET DESKTOP    ######################### 

#################################################################################################
*/
   alert( "GOOGLE-CHROME CSS MODIFICATION ");

    var GgleChrome = (function(){

      /**/
      if ( winD.width() <= 720 && winD.height() >= 360){
        body.css({
          'backgroundColor': 'none'
        });
      }else{
        body.css({
          'backgroundImage': 'url("/source/image/background/camion.png")',
          'backgroundSize' : 'cover'
        });
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<< body.mouseover >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        body.mouseover(function(){
          body.css({
            'backgroundSize' : '690px',
            'backgroundRepeat': 'no-repeat',
            'backgroundPosition': 'right 25%'
          });
          
          $('#pInfo').css({
            'marginLeft': '20%',
            'textShadow': '0.9px 1.5px 0.9px yellow',
            'fontSize'  : '15px'
          });
          /*
          login.css({
            'marginTop': '2%'
          });
          */
        });
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<< body.mouseover >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
      }
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
      if ( winD.width() <= 720 && winD.height() >= 360){
        fieldHeader.css({
          'backgroundColor': 'lightblue'
        });
      }else{
        fieldHeader.css({
          'background': 'none'
        });
      }
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

      if ( winD.width() <= 720 && winD.height() >= 360){/*HHHHHHHH*/}else{
        fieldHeadmLogo.css({
          'float'       : 'right',
          'borderRadius': '50px',
          'marginTop'   : '0%',
          'border'      : 'solid 2px',
          'borderColor' : 'black',
          'marginRight' : '8%',
          'width'       : '160px',
          'height'      : '160px'
        });
      }
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

      if ( winD.width() <= 720 && winD.height() >= 360){
        headImg.css({
          'display'      : 'inline-block',
          'position'     : 'relative',
          'paddingRight' : '4%',
          'paddingLeft'  : '4%',
          'marginTop'    : '-0.1%',
          'marginLeft'   : '10%'
        });
      }else{
        headImg.css({
          'display'      : 'inline-block',
          'position'     : 'relative',
          'paddingRight' : '8%',
          'paddingLeft'  : '8%',
          'marginTop'    : '-0.1%',
          'marginLeft'   : '10%'
        });
      }
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<   labTitr   >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// animation du titre de la page ALLYS I-E SERVICE
      if ( winD.width() <= 720 && winD.height() >= 360){

        labTitr.fadeOut( 4000, function(){}).css({
            'float'      : 'left',
            'fontSize'   : '30px',
            'fontStyle'  : 'Georgia, serif',
            'color'      : 'white',
            'textShadow' : '1px 3px 1px black',
            'marginLeft' : '-3%'
          });
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<   fieldHeadmLogo   >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
          fieldHeadmLogo.css({
              'float'       : 'right',
              'borderRadius': '40px',
              'marginTop'   : '-14%',
              'border'      : 'solid 2px',
              'borderColor' : 'white',
              'marginRight' : '-10px',
              'width'       : '99px',
              'height'      : '99px'
          });
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<   labTitr.fadeIn   >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        labTitr.fadeIn(8000, function(){
            labTitr.css({
              'float'      : 'left',
              'fontSize'   : '30px',
              'fontStyle'  : 'Georgia',
              'color'      : 'black',
              'textShadow' : '1.5px 4px 1.5px white',
              'marginTop' : '11%',
              'marginLeft' : '-3%'
            });

            fieldHeadmLogo.css({
              'float'       : 'right',
              'borderRadius': '40px',
              'marginTop'   : '-25%',
              'border'      : 'solid 2px',
              'borderColor' : 'black',
              'marginRight' : '-10px',
              'width'       : '99px',
              'height'      : '99px'
            });
        });
      }else{
        labTitr.css({
          'float'      : 'left',
          'fontSize'   : '80px',
          'fontStyle'  : 'Georgia',
          'color'      : 'black',
          'textShadow' : '1px 5px 1px white',
          'paddingLeft': '50px'
        });
      }


// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

      if ( winD.width() <= 720 && winD.height() >= 360){}else{};
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

      if ( winD.width() <= 720 && winD.height() >= 360){
        headerUl.css({
          'marginLeft': '-13%',
          'marginRight': '-10%'
        });
// #############################################
      headerUlLi.css({
        'overflow'               : 'hidden',
        'float'                  : 'left',
        'border'                 : 'solid 1px',
        'backgroundColor'        : 'white',
        'borderBottomRightRadius': '45%',
        'borderTopLeftRadius'    : '45%',
        'border'                 : 'solid 2px',
        'borderColor'            : 'black',
        'margin'                 : '0.3px'
      });
//#############################################
      headerUlLi.mouseover(function(){
        headerUlLi1.css({
          'backgroundColor': 'black',
          'borderColor'    : 'yellow'
        });
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

//#############################################
      headerUlLi1a.css({
        'fontSize'      : '19px',
        'paddingRight'  : '1px',
        'paddingLeft'   : '1px',
        'color'         : 'white'
      });
//#############################################
      });
//#############################################
      headerUlLiA.css({
        'textDecoration': 'none',
        'fontSize'      : '10px',
        'paddingRight'  : '1px',
        'paddingLeft'   : '1px',
        'color'         : 'black'
      });
//#############################################
      }else{
        headerUl.css({
          'marginTop': '2.5%'
        });
// #############################################

// #############################################
      headerUlLi.css({
        'overflow': 'hidden',
        'margin': '3px',
        'float': 'left',
        'border': 'solid 1px',
        'backgroundColor': 'white',
        'borderBottomRightRadius': '25%',
        'borderTopLeftRadius': '25%',
        'border': 'solid 2px',
        'paddingLeft': '1%',
        'paddingRight': '1%',
        'borderColor': 'blue'
      });
//#############################################
      headerUlLiA.css({
        'textDecoration': 'none',
        'fontSize'      : '20px',
        'paddingRight'  : '0px',
        'paddingLeft'   : '0px',
        'color'         : 'black'
      });
/*
########################################################################################
                      HEADER_UL_LI mouseover
##########################################################################################
*/
      headerUlLi1.mouseover(function(){
        fieldHeader.fadeIn("slow", function(){
          fieldHeader.css({
            'background': 'none'
          });
// ----------------------------------------------------------
        labTitr.css({
          'float'      : 'left',
          'fontSize'   : '80px',
          'fontStyle'  : 'Georgia',
          'color'      : 'black',
          'textShadow' : '1px 5px 1px yellow',
          'paddingLeft': '50px'
        });
        });
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  headerUlLi1.css  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        headerUlLi1.css({
          'backgroundColor': 'black',
          'borderColor'    : 'white',
          'borderColor'    : 'yellow'
        });
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  headerUlLi1a.css >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
      headerUlLi1a.css({
        'fontSize'      : '20px',
        'paddingRight'  : '1px',
        'paddingLeft'   : '1px',
        'color'         : 'white'
      });
//##################################################################################
      }).mouseout(function(){  // .MOUSEOUT ***** 
//##################################################################################
        fieldHeader.fadeIn( 3000, function(){
          fieldHeader.css({
            'background': 'none'
          });
// --------------------------------------------------
        labTitr.css({
          'float'      : 'left',
          'fontSize'   : '80px',
          'fontStyle'  : 'Georgia',
          'color'      : 'black',
          'textShadow' : '1px 5px 1px white',
          'paddingLeft': '50px'
        });
        });
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  headerUlLi1.css >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        headerUlLi1.css({
          'backgroundColor': 'black',
          'borderColor'    : 'white'
        });

// #############################################
      headerUlLi.css({
        'margin': '3px',
        'border': 'solid 1px',
        'backgroundColor': 'white',
        'borderBottomRightRadius': '25%',
        'borderTopLeftRadius': '25%',
        'border': 'solid 2px',
        'paddingLeft': '1%',
        'paddingRight': '1%',
        'borderColor': 'blue'
      });
//#############################################
      headerUlLiA.css({
        'textDecoration': 'none',
        'fontSize'      : '20px',
        'paddingRight'  : '0px',
        'paddingLeft'   : '0px',
        'color'         : 'black'
      });
//#############################################        
      });
//#############################################



//#############################################
      headerUlLi2.mouseover(function(){

        fieldHeader.fadeIn("slow", function(){
          fieldHeader.css({
            'background': 'none'
          });
// ----------------------------------------------------------
        labTitr.css({
          'float'      : 'left',
          'fontSize'   : '80px',
          'fontStyle'  : 'Georgia',
          'color'      : 'black',
          'textShadow' : '1px 5px 1px yellow',
          'paddingLeft': '50px'
        });
        });
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  headerUlLi2.css  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        headerUlLi2.css({
          'backgroundColor': 'black',
          'borderColor'    : 'white',
          'borderColor'    : 'yellow'
        });
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  headerUlLi1a.css >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
      headerUlLi2a.css({
        'fontSize'      : '20px',
        'paddingRight'  : '1px',
        'paddingLeft'   : '1px',
        'color'         : 'white'
      });
//##################################################################################
      }).mouseout(function(){  // .MOUSEOUT ***** 
//##################################################################################
//##################################################################################
        fieldHeader.fadeIn( 3000, function(){
          fieldHeader.css({
            'background': 'none'
          });
// --------------------------------------------------
        labTitr.css({
          'float'      : 'left',
          'fontSize'   : '80px',
          'fontStyle'  : 'Georgia',
          'color'      : 'black',
          'textShadow' : '1px 5px 1px white',
          'paddingLeft': '50px'
        });
        });
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  headerUlLi1.css >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        headerUlLi2.css({
          'backgroundColor': 'black',
          'borderColor'    : 'white'
        });

// #############################################
      headerUlLi.css({
        'margin': '3px',
        'border': 'solid 1px',
        'backgroundColor': 'white',
        'borderBottomRightRadius': '25%',
        'borderTopLeftRadius': '25%',
        'border': 'solid 2px',
        'paddingLeft': '1%',
        'paddingRight': '1%',
        'borderColor': 'blue'
      });
//#############################################
      headerUlLiA.css({
        'textDecoration': 'none',
        'fontSize'      : '20px',
        'paddingRight'  : '0px',
        'paddingLeft'   : '0px',
        'color'         : 'black'
      });
//#############################################        
      });
//#############################################


/*
########################################################################################
                      HEADER_UL_LI mouseover
##########################################################################################
*/
      headerUlLi3.mouseover(function(){

        fieldHeader.fadeIn("slow", function(){
          fieldHeader.css({
            'background': 'none'
          });
// ----------------------------------------------------------
        labTitr.css({
          'float'      : 'left',
          'fontSize'   : '80px',
          'fontStyle'  : 'Georgia',
          'color'      : 'black',
          'textShadow' : '1px 5px 1px yellow',
          'paddingLeft': '50px'
        });
        });
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  headerUlLi3.css  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        headerUlLi3.css({
          'backgroundColor': 'black',
          'borderColor'    : 'white',
          'borderColor'    : 'yellow'
        });
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  headerUlLi1a.css >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
      headerUlLi3a.css({
        'fontSize'      : '20px',
        'paddingRight'  : '1px',
        'paddingLeft'   : '1px',
        'color'         : 'white'
      });
//##################################################################################
      }).mouseout(function(){  // .MOUSEOUT ***** 
//##################################################################################
//##################################################################################
        fieldHeader.fadeIn( 3000, function(){
          fieldHeader.css({
            'background': 'none'
          });
// --------------------------------------------------
        labTitr.css({
          'float'      : 'left',
          'fontSize'   : '80px',
          'fontStyle'  : 'Georgia',
          'color'      : 'black',
          'textShadow' : '1px 5px 1px white',
          'paddingLeft': '50px'
        });
        });
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  headerUlLi1.css >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        headerUlLi3.css({
          'backgroundColor': 'black',
          'borderColor'    : 'white'
        });

// #############################################
      headerUlLi.css({
        'margin': '3px',
        'border': 'solid 1px',
        'backgroundColor': 'white',
        'borderBottomRightRadius': '25%',
        'borderTopLeftRadius': '25%',
        'border': 'solid 2px',
        'paddingLeft': '1%',
        'paddingRight': '1%',
        'borderColor': 'blue'
      });
//#############################################
      headerUlLiA.css({
        'textDecoration': 'none',
        'fontSize'      : '20px',
        'paddingRight'  : '0px',
        'paddingLeft'   : '0px',
        'color'         : 'black'
      });
//#############################################        
      });
//#############################################



//#############################################
      headerUlLi4.mouseover(function(){

        fieldHeader.fadeIn("slow", function(){
          fieldHeader.css({
            'background': 'none'
          });
// ----------------------------------------------------------
        labTitr.css({
          'float'      : 'left',
          'fontSize'   : '80px',
          'fontStyle'  : 'Georgia',
          'color'      : 'black',
          'textShadow' : '1px 5px 1px yellow',
          'paddingLeft': '50px'
        });
        });
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  headerUlLi4.css  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        headerUlLi4.css({
          'backgroundColor': 'black',
          'borderColor'    : 'white',
          'borderColor'    : 'yellow'
        });
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  headerUlLi1a.css >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
      headerUlLi4a.css({
        'fontSize'      : '20px',
        'paddingRight'  : '1px',
        'paddingLeft'   : '1px',
        'color'         : 'white'
      });
//##################################################################################
      }).mouseout(function(){  // .MOUSEOUT ***** 
//##################################################################################
//##################################################################################
        fieldHeader.fadeIn( 3000, function(){
          fieldHeader.css({
            'background': 'none'
          });
// --------------------------------------------------
        labTitr.css({
          'float'      : 'left',
          'fontSize'   : '80px',
          'fontStyle'  : 'Georgia',
          'color'      : 'black',
          'textShadow' : '1px 5px 1px white',
          'paddingLeft': '50px'
        });
        });
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  headerUlLi1.css >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        headerUlLi4.css({
          'backgroundColor': 'black',
          'borderColor'    : 'white'
        });

// #############################################
      headerUlLi.css({
        'margin': '3px',
        'border': 'solid 1px',
        'backgroundColor': 'white',
        'borderBottomRightRadius': '25%',
        'borderTopLeftRadius': '25%',
        'border': 'solid 2px',
        'paddingLeft': '1%',
        'paddingRight': '1%',
        'borderColor': 'blue'
      });
//#############################################
      headerUlLiA.css({
        'textDecoration': 'none',
        'fontSize'      : '20px',
        'paddingRight'  : '0px',
        'paddingLeft'   : '0px',
        'color'         : 'black'
      });
//#############################################        
      });
//#############################################


//#############################################
      headerUlLi5.mouseover(function(){

        fieldHeader.fadeIn("slow", function(){
          fieldHeader.css({
            'background': 'none'
          });
// ----------------------------------------------------------
        labTitr.css({
          'float'      : 'left',
          'fontSize'   : '80px',
          'fontStyle'  : 'Georgia',
          'color'      : 'black',
          'textShadow' : '1px 5px 1px yellow',
          'paddingLeft': '50px'
        });
        });
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  headerUlLi5.css  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        headerUlLi5.css({
          'backgroundColor': 'black',
          'borderColor'    : 'white',
          'borderColor'    : 'yellow'
        });
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  headerUlLi1a.css >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
      headerUlLi5a.css({
        'fontSize'      : '20px',
        'paddingRight'  : '1px',
        'paddingLeft'   : '1px',
        'color'         : 'white'
      });
//##################################################################################
      }).mouseout(function(){  // .MOUSEOUT ***** 
//##################################################################################
//##################################################################################
        fieldHeader.fadeIn( 3000, function(){
          fieldHeader.css({
            'background': 'none'
          });
// --------------------------------------------------
        labTitr.css({
          'float'      : 'left',
          'fontSize'   : '80px',
          'fontStyle'  : 'Georgia',
          'color'      : 'black',
          'textShadow' : '1px 5px 1px white',
          'paddingLeft': '50px'
        });
        });
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  headerUlLi1.css >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        headerUlLi5.css({
          'backgroundColor': 'black',
          'borderColor'    : 'white'
        });

// #############################################
      headerUlLi.css({
        'margin': '3px',
        'border': 'solid 1px',
        'backgroundColor': 'white',
        'borderBottomRightRadius': '25%',
        'borderTopLeftRadius': '25%',
        'border': 'solid 2px',
        'paddingLeft': '1%',
        'paddingRight': '1%',
        'borderColor': 'blue'
      });
//#############################################
      headerUlLiA.css({
        'textDecoration': 'none',
        'fontSize'      : '20px',
        'paddingRight'  : '0px',
        'paddingLeft'   : '0px',
        'color'         : 'black'
      });
//#############################################        
      });
//#############################################
/*
/*
#####################################################################################################################
#
#
#                                FIN DE LA LISTE DES FONCTION GUIDE, ACHAT, COMMAND, SERVICE
#
#####################################################################################################################
*/
      } // FIN DE DE ELSE 
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
      
      if ( winD.width() <= 720 && winD.height() >= 360){
        pInfo.css({
          'fontSize': '10px'
        });
      }else{
        pInfo.css({
          'textAlign': 'left',
          'fontSize': '20px',
          'marginBottom': '0%'
        });
      }
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
      
      if ( winD.width() <= 720 && winD.height() >= 360){

//   ########################################
          logLab1.css({
            'backgroundColor': 'none',
            'fontSize'       : '15px',
            'float'          : 'left',
            'marginLeft'     : '20%',
            'border'         : 'solid 1px'
          });
          logLab1a.css({
            'textDecoration' : 'none',
            'padding'        : '5px',
            'color'          : 'black',
            'fontSize'       : '15px'
          });
//   ########################################
          logLab1.mouseover(function(){
          //------------------------------------------------
            logLab1.css({
                'backgroundColor'       : 'black',
                'border'                : 'solid 2px',
                'borderColor'           : 'yellow',
                'borderTopLeftRadius'   : '10%',
                'borderBottomLeftRadius': '10%'
            });
          //------------------------------------------------
            logLab1a.css({
              'color': 'yellow',
              'fontSize': '15px'
            });
          //------------------------------------------------
          });
//   ########################################
          logLab1.mouseout(function(){
          //------------------------------------------------
            logLab1.css({
                'backgroundColor': 'white',
                'border'         : 'solid 2px',
                'borderColor'    : 'black'
            });
          //------------------------------------------------
            logLab1a.css({
              'color'   : 'black',
              'fontSize': '15px'
            });
          //------------------------------------------------
          });

//   ####################+++++++++++++++++++++++++++++++++####################          
//   ########################################
          logLab2.css({
            'backgroundColor': 'none',
            'fontSize'       : '15px',
            'float'          : 'right',
            'marginRight'     : '20%',
            'border'         : 'solid 1px'
          });
          logLab2a.css({
            'textDecoration' : 'none',
            'padding'        : '5px',
            'color'          : 'black',
            'fontSize'       : '15px'
          });
//   ########################################
          logLab2.mouseover(function(){
          //------------------------------------------------
            logLab2.css({
                'backgroundColor'       : 'black',
                'border'                : 'solid 2px',
                'borderColor'           : 'yellow',
                'borderTopRightRadius'   : '10%',
                'borderBottomRightRadius': '10%'
            });
          //------------------------------------------------
            logLab2a.css({
              'color'   : 'yellow',
              'fontSize': '15px'
            });
          //------------------------------------------------
          });
//   ########################################
          logLab2.mouseout(function(){
          //------------------------------------------------
            logLab2.css({
                'backgroundColor': 'white',
                'border'         : 'solid 2px',
                'borderColor'    : 'black'
            });
          //------------------------------------------------
            logLab2a.css({
              'color'   : 'black',
              'fontSize': '15px'
            });
          //------------------------------------------------
          });

      }else{
//   ########################################
          login.css({
            'marginTop': '5%'
          });
//   ########################################
          logLab1.css({
            'backgroundColor': 'none',
            'fontSize'       : '20px',
            'float'          : 'left',
            'marginLeft'     : '33%',
            'border'         : 'solid 1px'
          });
          logLab1a.css({
            'textDecoration' : 'none',
            'padding'        : '15px',
            'color'          : 'black',
            'fontSize'       : '23px'
          });
//   ########################################
          logLab1.mouseover(function(){
          //------------------------------------------------
            logLab1.css({
                'backgroundColor'        : 'black',
                'border'                 : 'solid 2px',
                'borderColor'            : 'yellow',
                'paddingLeft'            : '20px',
                'paddingRight'           : '20px',
                'borderTopRightRadius'   : '25%',
                'borderBottomRightRadius': '25%',
                'borderTopLeftRadius'    : '25%',
                'borderBottomLeftRadius' : '25%'
            });
          //------------------------------------------------
            logLab1a.css({
              'color'   : 'yellow',
              'fontSize': '23px'
            });
          //------------------------------------------------
          });
//   ########################################
          logLab1.mouseout(function(){
          //------------------------------------------------
            logLab1.css({
                'backgroundColor'        : 'white',
                'border'                 : 'solid 2px',
                'borderColor'            : 'black',
                'paddingLeft'            : '3px',
                'paddingRight'           : '3px',
                'borderTopRightRadius'   : '0%',
                'borderBottomRightRadius': '0%',
                'borderTopLeftRadius'    : '0%',
                'borderBottomLeftRadius' : '0%'
            });
          //------------------------------------------------
            logLab1a.css({
              'color'   : 'black',
              'fontSize': '23px'
            });
          //------------------------------------------------
          });

//   ####################+++++++++++++++++++++++++++++++++####################          
//   ########################################
          logLab2.css({
            'backgroundColor': 'none',
            'fontSize'       : '20px',
            'float'          : 'right',
            'marginRight'    : '33%',
            'border'         : 'solid 1px'
          });
          logLab2a.css({
            'textDecoration' : 'none',
            'padding'        : '10px',
            'color'          : 'black',
            'fontSize'       : '23px'
          });
//   ########################################
          logLab2.mouseover(function(){
          //------------------------------------------------
            logLab2.css({
                'backgroundColor'        : 'black',
                'border'                 : 'solid 2px',
                'borderColor'            : 'yellow',
                'paddingLeft'            : '20px',
                'paddingRight'           : '20px',
                'borderTopRightRadius'   : '25%',
                'borderBottomRightRadius': '25%',
                'borderTopLeftRadius'    : '25%',
                'borderBottomLeftRadius' : '25%'
            });
          //------------------------------------------------
            logLab2a.css({
              'color'      : 'yellow',
              'fontSize'   : '23px'
            });
          //------------------------------------------------
          });
//   ########################################
          logLab2.mouseout(function(){
//   ########################################
            logLab2.css({
                'backgroundColor'        : 'white',
                'border'                 : 'solid 2px',
                'borderColor'            : 'black',
                'paddingLeft'            : '3px',
                'paddingRight'           : '3px',
                'borderTopRightRadius'   : '0%',
                'borderBottomRightRadius': '0%',
                'borderTopLeftRadius'    : '0%',
                'borderBottomLeftRadius' : '0%'
            });
          //------------------------------------------------
            logLab2a.css({
              'color': 'black',
              'fontSize': '23px'
            });
          //------------------------------------------------
          });

/* ############################################################
        RESEAUX SOCIO UL, LI, A
   ############################################################
*/
        reseauxSul.css({
          'marginTop': '-1%'
        });
        reseauxSli.css({
          'overflow': 'hidden',
          'float'   : 'left',
          'padding' : '10px'
        });
        reseauxSA.css({
          'textDecoration': 'none',
          'fontSize'      : '20px'
        });

      } // fin de la semi-colonne else

// ##########################    autoField    ##########################
      labelTitr0.css({
        'fontSize': '25px'
      });

      labelTitr1.css({
        'fontSize': '25px'
      });

      autoField.css({
        'marginLeft' : '10%',
        'marginRight': '10%'
      });

      autoField1.css({
        'marginLeft' : '10%',
        'marginRight': '10%'
      });
// ########################## AutoDiv ul li a ##########################
      autoDiv.css({
        'marginLeft': '5px'
      });
// ------------------------------------------------------
      autoDivUl.css({
        'float': 'left'
      });
// ------------------------------------------------------
      $('#autoImg0').mouseover(function(){});
      $('#autoImg3').mouseout(function(){
        
        $('#Aimg1').animate({
          'width': '350px',
          'height': '250px'
        });
        // $('#autoImg1').fadeIn();
        // $('#autoImg2').fadeIn();
      });
// ------------------------------------------
    })(); // FIN DE LA FUNCTION CHROME
// ###################*************************************************##########################
  }
/* ----------------------------$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$--------------------------------
  **************************** FIN DE LA PARTIE GOOGLE CHROME    *******************************
----------------------------$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$--------------------------------*/

/*
################################################################################################
#
##########################       NOUVEAU MOTEUR DE RECHERCHE          ##########################
################################################################################################
#########################       SAFARIE VERSION MOBILE ET DESKTOP      ######################### 
#
#################################################################################################
*/
  else if(navigator.userAgent.indexOf("Safari") != -1)
  {
    alert('Safari');
  }
/* ----------------------------$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$--------------------------------
  **************************** FIN DE LA PARTIE D'OPERA MINI    *******************************
----------------------------$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$--------------------------------*/

/*





#################################################################################################

#########################      FIREFOXE VERSION MOBILE ET DESKTOP      ######################### 

#################################################################################################
*/
  else if(navigator.userAgent.indexOf("Firefox") != -1 ) 
  {

    alert('Firefox');
    var firefoxCss = (function(){

      /**/
      if ( winD.width() <= 720 && winD.height() >= 360){}else{
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<< body.mouseover >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        body.css({
          'backgroundImage'   : 'url("/source/image/background/camion.png")',
          'backgroundSize'    : '750px',
          'backgroundRepeat'  : 'no-repeat',
          'backgroundPosition': 'right 15%'
        });
        pInfo.css({
          'marginLeft': '5%',
          'textAlign': 'left',
          'marginTop' : '1%',
          'fontSize'  : '15px',
          'textShadow': '1px 1.5px 1px yellow',
          'color'     : 'black'
        });  
//###################### MODIFICATION NORMAL ###########################
        body.mouseover(function(){
          /* BODY ONMOUSEOVER ON BODY MODIFICATION */
        pInfo.css({
          'marginLeft': '5%',
          'textAlign': 'left',
          'marginTop' : '1%',
          'fontSize'  : '15px',
          'textShadow': '1px 1.5px 1px yellow',
          'color'     : 'black'
        });  
//######################################################################
        /* BODY ONMOUSEOVER ON BODY MODIFICATION */
          /* Creation OnMouseOut */
        }).mouseout(function(){
          body.css({
            'backgroundImage'   : 'url("/source/image/background/camion.png")',
            'backgroundSize'    : '750px',
            'backgroundRepeat'  : 'no-repeat',
            'backgroundPosition': 'right 15%'
          });
          /* FIELDHEADER ON BODY MODIFICATION */
          fieldHeader.css({
            'border'          : 'none',
            'background'      : 'none'
          });
          pInfo.css({
            'marginLeft': '5%',
            'textAlign': 'left',
            'marginTop' : '1%',
            'fontSize'  : '15px',
            'textShadow': '1px 1.5px 1px yellow',
            'color'     : 'black'
          });           
        });
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<< body.mouseover >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
      }

        fieldHeadmLogo.css({
          'float'       : 'right',
          'borderRadius': '50px',
          'marginTop'   : '0%',
          'border'      : 'solid 2px',
          'borderColor' : 'black',
          'marginRight' : '8%',
          'width'       : '160px',
          'height'      : '160px'
        });
      }
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
      headImg.css({
        'display'      : 'inline-block',
        'position'     : 'relative',
        'paddingRight' : '4%',
        'paddingLeft'  : '4%',
        'marginTop'    : '-0.1%',
        'marginLeft'   : '10%'
      });
      headImg.css({
        'display'      : 'inline-block',
        'position'     : 'relative',
        'paddingRight' : '8%',
        'paddingLeft'  : '8%',
        'marginTop'    : '-0.1%',
        'marginLeft'   : '10%'
      });
  
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<   labTitr   >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// animation du titre de la page ALLYS I-E SERVICE
      labTitr.fadeOut( 4000, function(){}).css({
        'float'      : 'left',
        'fontSize'   : '30px',
        'fontStyle'  : 'Georgia, serif',
        'color'      : 'white',
        'textShadow' : '1px 3px 1px black',
        'marginLeft' : '-3%'
      });
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<   fieldHeadmLogo   >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
      fieldHeadmLogo.css({
        'float'       : 'right',
        'borderRadius': '40px',
        'marginTop'   : '-14%',
        'border'      : 'solid 2px',
        'borderColor' : 'white',
        'marginRight' : '-10px',
        'width'       : '99px',
        'height'      : '99px'
      });
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<   labTitr.fadeIn   >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
      labTitr.fadeIn(8000, function(){
        labTitr.css({
          'float'      : 'left',
          'fontSize'   : '30px',
          'fontStyle'  : 'Georgia',
          'color'      : 'black',
          'textShadow' : '1.5px 4px 1.5px white',
          'marginTop' : '11%',
          'marginLeft' : '-3%'
        });

        fieldHeadmLogo.css({
          'float'       : 'right',
          'borderRadius': '40px',
          'marginTop'   : '-25%',
          'border'      : 'solid 2px',
          'borderColor' : 'black',
          'marginRight' : '-10px',
          'width'       : '99px',
          'height'      : '99px'
        });
        });

        labTitr.css({
          'float'      : 'left',
          'fontSize'   : '80px',
          'fontStyle'  : 'Georgia',
          'color'      : 'black',
          'textShadow' : '1px 5px 1px white',
          'paddingLeft': '50px'
        });


// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
      headerUl.css({
        'marginLeft': '-13%',
        'marginRight': '-10%'
      });
// #############################################
      headerUlLi.css({
        'overflow'               : 'hidden',
        'float'                  : 'left',
        'border'                 : 'solid 1px',
        'backgroundColor'        : 'white',
        'borderBottomRightRadius': '45%',
        'borderTopLeftRadius'    : '45%',
        'border'                 : 'solid 2px',
        'borderColor'            : 'black',
        'margin'                 : '0.3px'
      });
//#############################################
    headerUlLi.mouseover(function(){
        headerUlLi1.css({
          'backgroundColor': 'black',
          'borderColor'    : 'yellow'
        });
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

//#############################################
        headerUlLi1a.css({
          'fontSize'      : '19px',
          'paddingRight'  : '1px',
          'paddingLeft'   : '1px',
          'color'         : 'white'
      });
//#############################################
    });
//#############################################
      headerUlLiA.css({
        'textDecoration': 'none',
        'fontSize'      : '10px',
        'paddingRight'  : '1px',
        'paddingLeft'   : '1px',
        'color'         : 'black'
      });
//#############################################
      headerUl.css({
        'marginTop': '2.5%'
      });
// #############################################

// #############################################
      headerUlLi.css({
        'overflow': 'hidden',
        'margin': '3px',
        'float': 'left',
        'border': 'solid 1px',
        'backgroundColor': 'white',
        'borderBottomRightRadius': '25%',
        'borderTopLeftRadius': '25%',
        'border': 'solid 2px',
        'paddingLeft': '1%',
        'paddingRight': '1%',
        'borderColor': 'blue'
      });
//#############################################
      headerUlLiA.css({
        'textDecoration': 'none',
        'fontSize'      : '20px',
        'paddingRight'  : '0px',
        'paddingLeft'   : '0px',
        'color'         : 'black'
      });
/*
########################################################################################
                      HEADER_UL_LI mouseover
##########################################################################################
*/
      headerUlLi1.mouseover(function(){
        fieldHeader.fadeIn("slow", function(){
          fieldHeader.css({
            'background': 'none'
          });
// ----------------------------------------------------------
        labTitr.css({
          'float'      : 'left',
          'fontSize'   : '80px',
          'fontStyle'  : 'Georgia',
          'color'      : 'black',
          'textShadow' : '1px 5px 1px yellow',
          'paddingLeft': '50px'
        });
        });
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  headerUlLi1.css  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        headerUlLi1.css({
          'backgroundColor': 'black',
          'borderColor'    : 'white',
          'borderColor'    : 'yellow'
        });
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  headerUlLi1a.css >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
      headerUlLi1a.css({
        'fontSize'      : '20px',
        'paddingRight'  : '1px',
        'paddingLeft'   : '1px',
        'color'         : 'white'
      });
//##################################################################################
      }).mouseout(function(){  // .MOUSEOUT ***** 
//##################################################################################
        fieldHeader.fadeIn( 3000, function(){
          fieldHeader.css({
            'background': 'none'
          });
// --------------------------------------------------
        labTitr.css({
          'float'      : 'left',
          'fontSize'   : '80px',
          'fontStyle'  : 'Georgia',
          'color'      : 'black',
          'textShadow' : '1px 5px 1px white',
          'paddingLeft': '50px'
        });
        });
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  headerUlLi1.css >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        headerUlLi1.css({
          'backgroundColor': 'black',
          'borderColor'    : 'white'
        });

// #############################################
      headerUlLi.css({
        'margin': '3px',
        'border': 'solid 1px',
        'backgroundColor': 'white',
        'borderBottomRightRadius': '25%',
        'borderTopLeftRadius': '25%',
        'border': 'solid 2px',
        'paddingLeft': '1%',
        'paddingRight': '1%',
        'borderColor': 'blue'
      });
//#############################################
      headerUlLiA.css({
        'textDecoration': 'none',
        'fontSize'      : '20px',
        'paddingRight'  : '0px',
        'paddingLeft'   : '0px',
        'color'         : 'black'
      });
//#############################################        
      });
//#############################################



//#############################################
      headerUlLi2.mouseover(function(){

        fieldHeader.fadeIn("slow", function(){
          fieldHeader.css({
            'background': 'none'
          });
// ----------------------------------------------------------
        labTitr.css({
          'float'      : 'left',
          'fontSize'   : '80px',
          'fontStyle'  : 'Georgia',
          'color'      : 'black',
          'textShadow' : '1px 5px 1px yellow',
          'paddingLeft': '50px'
        });
        });
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  headerUlLi2.css  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        headerUlLi2.css({
          'backgroundColor': 'black',
          'borderColor'    : 'white',
          'borderColor'    : 'yellow'
        });
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  headerUlLi1a.css >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
      headerUlLi2a.css({
        'fontSize'      : '20px',
        'paddingRight'  : '1px',
        'paddingLeft'   : '1px',
        'color'         : 'white'
      });
//##################################################################################
      }).mouseout(function(){  // .MOUSEOUT ***** 
//##################################################################################
//##################################################################################
        fieldHeader.fadeIn( 3000, function(){
          fieldHeader.css({
            'background': 'none'
          });
// --------------------------------------------------
        labTitr.css({
          'float'      : 'left',
          'fontSize'   : '80px',
          'fontStyle'  : 'Georgia',
          'color'      : 'black',
          'textShadow' : '1px 5px 1px white',
          'paddingLeft': '50px'
        });
        });
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  headerUlLi1.css >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        headerUlLi2.css({
          'backgroundColor': 'black',
          'borderColor'    : 'white'
        });

// #############################################
      headerUlLi.css({
        'margin': '3px',
        'border': 'solid 1px',
        'backgroundColor': 'white',
        'borderBottomRightRadius': '25%',
        'borderTopLeftRadius': '25%',
        'border': 'solid 2px',
        'paddingLeft': '1%',
        'paddingRight': '1%',
        'borderColor': 'blue'
      });
//#############################################
      headerUlLiA.css({
        'textDecoration': 'none',
        'fontSize'      : '20px',
        'paddingRight'  : '0px',
        'paddingLeft'   : '0px',
        'color'         : 'black'
      });
//#############################################        
      });
//#############################################


/*
########################################################################################
                      HEADER_UL_LI mouseover
##########################################################################################
*/
      headerUlLi3.mouseover(function(){

        fieldHeader.fadeIn("slow", function(){
          fieldHeader.css({
            'background': 'none'
          });
// ----------------------------------------------------------
        labTitr.css({
          'float'      : 'left',
          'fontSize'   : '80px',
          'fontStyle'  : 'Georgia',
          'color'      : 'black',
          'textShadow' : '1px 5px 1px yellow',
          'paddingLeft': '50px'
        });
        });
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  headerUlLi3.css  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        headerUlLi3.css({
          'backgroundColor': 'black',
          'borderColor'    : 'white',
          'borderColor'    : 'yellow'
        });
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  headerUlLi1a.css >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
      headerUlLi3a.css({
        'fontSize'      : '20px',
        'paddingRight'  : '1px',
        'paddingLeft'   : '1px',
        'color'         : 'white'
      });
//##################################################################################
      }).mouseout(function(){  // .MOUSEOUT ***** 
//##################################################################################
//##################################################################################
        fieldHeader.fadeIn( 3000, function(){
          fieldHeader.css({
            'background': 'none'
          });
// --------------------------------------------------
        labTitr.css({
          'float'      : 'left',
          'fontSize'   : '80px',
          'fontStyle'  : 'Georgia',
          'color'      : 'black',
          'textShadow' : '1px 5px 1px white',
          'paddingLeft': '50px'
        });
        });
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  headerUlLi1.css >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        headerUlLi3.css({
          'backgroundColor': 'black',
          'borderColor'    : 'white'
        });

// #############################################
      headerUlLi.css({
        'margin': '3px',
        'border': 'solid 1px',
        'backgroundColor': 'white',
        'borderBottomRightRadius': '25%',
        'borderTopLeftRadius': '25%',
        'border': 'solid 2px',
        'paddingLeft': '1%',
        'paddingRight': '1%',
        'borderColor': 'blue'
      });
//#############################################
      headerUlLiA.css({
        'textDecoration': 'none',
        'fontSize'      : '20px',
        'paddingRight'  : '0px',
        'paddingLeft'   : '0px',
        'color'         : 'black'
      });
//#############################################        
      });
//#############################################



//#############################################
      headerUlLi4.mouseover(function(){

        fieldHeader.fadeIn("slow", function(){
          fieldHeader.css({
            'background': 'none'
          });
// ----------------------------------------------------------
        labTitr.css({
          'float'      : 'left',
          'fontSize'   : '80px',
          'fontStyle'  : 'Georgia',
          'color'      : 'black',
          'textShadow' : '1px 5px 1px yellow',
          'paddingLeft': '50px'
        });
        });
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  headerUlLi4.css  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        headerUlLi4.css({
          'backgroundColor': 'black',
          'borderColor'    : 'white',
          'borderColor'    : 'yellow'
        });
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  headerUlLi1a.css >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
      headerUlLi4a.css({
        'fontSize'      : '20px',
        'paddingRight'  : '1px',
        'paddingLeft'   : '1px',
        'color'         : 'white'
      });
//##################################################################################
      }).mouseout(function(){  // .MOUSEOUT ***** 
//##################################################################################
//##################################################################################
        fieldHeader.fadeIn( 3000, function(){
          fieldHeader.css({
            'background': 'none'
          });
// --------------------------------------------------
        labTitr.css({
          'float'      : 'left',
          'fontSize'   : '80px',
          'fontStyle'  : 'Georgia',
          'color'      : 'black',
          'textShadow' : '1px 5px 1px white',
          'paddingLeft': '50px'
        });
        });
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  headerUlLi1.css >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        headerUlLi4.css({
          'backgroundColor': 'black',
          'borderColor'    : 'white'
        });

// #############################################
      headerUlLi.css({
        'margin': '3px',
        'border': 'solid 1px',
        'backgroundColor': 'white',
        'borderBottomRightRadius': '25%',
        'borderTopLeftRadius': '25%',
        'border': 'solid 2px',
        'paddingLeft': '1%',
        'paddingRight': '1%',
        'borderColor': 'blue'
      });
//#############################################
      headerUlLiA.css({
        'textDecoration': 'none',
        'fontSize'      : '20px',
        'paddingRight'  : '0px',
        'paddingLeft'   : '0px',
        'color'         : 'black'
      });
//#############################################        
      });
//#############################################


//#############################################
      headerUlLi5.mouseover(function(){

        fieldHeader.fadeIn("slow", function(){
          fieldHeader.css({
            'background': 'none'
          });
// ----------------------------------------------------------
        labTitr.css({
          'float'      : 'left',
          'fontSize'   : '80px',
          'fontStyle'  : 'Georgia',
          'color'      : 'black',
          'textShadow' : '1px 5px 1px yellow',
          'paddingLeft': '50px'
        });
        });
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  headerUlLi5.css  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        headerUlLi5.css({
          'backgroundColor': 'black',
          'borderColor'    : 'white',
          'borderColor'    : 'yellow'
        });
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  headerUlLi1a.css >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
      headerUlLi5a.css({
        'fontSize'      : '20px',
        'paddingRight'  : '1px',
        'paddingLeft'   : '1px',
        'color'         : 'white'
      });
//##################################################################################
      }).mouseout(function(){  // .MOUSEOUT ***** 
//##################################################################################
//##################################################################################
        fieldHeader.fadeIn( 3000, function(){
          fieldHeader.css({
            'background': 'none'
          });
// --------------------------------------------------
        labTitr.css({
          'float'      : 'left',
          'fontSize'   : '80px',
          'fontStyle'  : 'Georgia',
          'color'      : 'black',
          'textShadow' : '1px 5px 1px white',
          'paddingLeft': '50px'
        });
        });
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  headerUlLi1.css >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        headerUlLi5.css({
          'backgroundColor': 'black',
          'borderColor'    : 'white'
        });

// #############################################
      headerUlLi.css({
        'margin': '3px',
        'border': 'solid 1px',
        'backgroundColor': 'white',
        'borderBottomRightRadius': '25%',
        'borderTopLeftRadius': '25%',
        'border': 'solid 2px',
        'paddingLeft': '1%',
        'paddingRight': '1%',
        'borderColor': 'blue'
      });
//#############################################
      headerUlLiA.css({
        'textDecoration': 'none',
        'fontSize'      : '20px',
        'paddingRight'  : '0px',
        'paddingLeft'   : '0px',
        'color'         : 'black'
      });
//#############################################        
      });
//#############################################
/*

/*
#####################################################################################################################
#
#
#                                FIN DE LA LISTE DES FONCTION GUIDE, ACHAT, COMMAND, SERVICE
#
#####################################################################################################################
*/
      
  } // FIN DE DE ELSE Mozilar
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
/*  
      if ( winD.width() <= 720 && winD.height() >= 360){
        pInfo.css({
          'fontSize': '10px'
        });
      }else{}
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
      
      if ( winD.width() <= 720 && winD.height() >= 360){

//   ########################################
          logLab1.css({
            'backgroundColor': 'none',
            'fontSize'       : '15px',
            'float'          : 'left',
            'marginLeft'     : '10%',
            'border'         : 'solid 1px'
          });
          logLab1a.css({
            'textDecoration' : 'none',
            'padding'        : '5px',
            'color'          : 'black',
            'fontSize'       : '15px'
          });
//   ########################################
          logLab1.mouseover(function(){
          //------------------------------------------------
            logLab1.css({
                'backgroundColor'       : 'black',
                'border'                : 'solid 2px',
                'borderColor'           : 'yellow',
                'borderTopLeftRadius'   : '10%',
                'borderBottomLeftRadius': '10%'
            });
          //------------------------------------------------
            logLab1a.css({
              'color': 'yellow',
              'fontSize': '15px'
            });
          //------------------------------------------------
          });
//   ########################################
          logLab1.mouseout(function(){
          //------------------------------------------------
            logLab1.css({
                'backgroundColor': 'white',
                'border'         : 'solid 2px',
                'borderColor'    : 'black'
            });
          //------------------------------------------------
            logLab1a.css({
              'color'   : 'black',
              'fontSize': '15px'
            });
          //------------------------------------------------
          });

//   ####################+++++++++++++++++++++++++++++++++####################          
//   ########################################
          logLab2.css({
            'background'     : 'none',
            'fontSize'       : '15px',
            'float'          : 'right',
            'marginRight'     : '30%',
            'border'         : 'solid 1px'
          });
          logLab2a.css({
            'textDecoration' : 'none',
            'padding'        : '5px',
            'color'          : 'black',
            'fontSize'       : '15px'
          });
//   ########################################
          logLab2.mouseover(function(){
          //------------------------------------------------
            logLab2.css({
                'backgroundColor'       : 'black',
                'border'                : 'solid 2px',
                'borderColor'           : 'yellow',
                'borderTopRightRadius'   : '10%',
                'borderBottomRightRadius': '10%'
            });
          //------------------------------------------------
            logLab2a.css({
              'color'   : 'yellow',
              'fontSize': '15px'
            });
          //------------------------------------------------
          });
//   ########################################
          logLab2.mouseout(function(){
          //------------------------------------------------
            logLab2.css({
                'border'         : 'solid 2px',
                'borderColor'    : 'black'
            });
          //------------------------------------------------
            logLab2a.css({
              'color'   : 'black',
              'fontSize': '15px'
            });
          //------------------------------------------------
          });

      }else{
//   ########################################
          login.css({
            'marginTop': '5%',
            'marginLeft': '-25%'
          });
//   ########################################
          logLab1.css({
            'backgroundColor': 'none',
            'fontSize'       : '20px',
            'float'          : 'left',
            'marginLeft'     : '30%',
            'border'         : 'solid 1px'
          });
          logLab1a.css({
            'textDecoration' : 'none',
            'padding'        : '15px',
            'color'          : 'black',
            'fontSize'       : '23px'
          });
//   ########################################
          logLab1.mouseover(function(){
          //------------------------------------------------
            logLab1.css({
                'backgroundColor'        : 'black',
                'border'                 : 'solid 2px',
                'borderColor'            : 'yellow',
                'paddingLeft'            : '20px',
                'paddingRight'           : '20px',
                'borderTopRightRadius'   : '25%',
                'borderBottomRightRadius': '25%',
                'borderTopLeftRadius'    : '25%',
                'borderBottomLeftRadius' : '25%'
            });
          //------------------------------------------------
            logLab1a.css({
              'color'   : 'yellow',
              'fontSize': '23px'
            });
          //------------------------------------------------
          });
//   ########################################
          logLab1.mouseout(function(){
          //------------------------------------------------
            logLab1.css({
                'backgroundColor'        : 'white',
                'border'                 : 'solid 2px',
                'borderColor'            : 'black',
                'paddingLeft'            : '3px',
                'paddingRight'           : '3px',
                'borderTopRightRadius'   : '0%',
                'borderBottomRightRadius': '0%',
                'borderTopLeftRadius'    : '0%',
                'borderBottomLeftRadius' : '0%'
            });
          //------------------------------------------------
            logLab1a.css({
              'color'   : 'black',
              'fontSize': '23px'
            });
          //------------------------------------------------
          });

//   ####################+++++++++++++++++++++++++++++++++####################          
//   ########################################
          logLab2.css({
            'background     ': 'none',
            'fontSize'       : '20px',
            'float'          : 'right',
            'marginRight'    : '40%',
            'border'         : 'solid 1px'
          });
          logLab2a.css({
            'textDecoration' : 'none',
            'padding'        : '10px',
            'color'          : 'black',
            'fontSize'       : '23px'
          });
//   ########################################
          logLab2.mouseover(function(){
          //------------------------------------------------
            logLab2.css({
                'backgroundColor'        : 'black',
                'border'                 : 'solid 2px',
                'borderColor'            : 'yellow',
                'paddingLeft'            : '20px',
                'paddingRight'           : '20px',
                'borderTopRightRadius'   : '25%',
                'borderBottomRightRadius': '25%',
                'borderTopLeftRadius'    : '25%',
                'borderBottomLeftRadius' : '25%'
            });
          //------------------------------------------------
            logLab2a.css({
              'color'      : 'yellow',
              'fontSize'   : '23px'
            });
          //------------------------------------------------
          });
//   ########################################
          logLab2.mouseout(function(){
//   ########################################
            logLab2.css({
                'background'             : 'none',
                'border'                 : 'solid 2px',
                'borderColor'            : 'black',
                'paddingLeft'            : '3px',
                'paddingRight'           : '3px',
                'borderTopRightRadius'   : '0%',
                'borderBottomRightRadius': '0%',
                'borderTopLeftRadius'    : '0%',
                'borderBottomLeftRadius' : '0%'
            });
          //------------------------------------------------
            logLab2a.css({
              'color': 'black',
              'fontSize': '23px'
            });
          //------------------------------------------------
          });

/* ############################################################
        RESEAUX SOCIO UL, LI, A
   ############################################################
*/
        reseauxSul.css({
          'marginTop': '-1%'
        });
// ------------------------------------------------------------
        reseauxSli.css({
          'overflow': 'hidden',
          'float'   : 'left',
          'padding' : '10px'
        });
// --------------------MOUSEOVER ---------------------
        reseauxSli1.mouseover(function(){
          reseauxSli1.css({
            'border'         : 'solid 2px',
            'borderColor'    : 'yellow',
            'borderRadius'   : '18px',
            'backgroundColor': 'black',
            'padding'        : '8px'
          });
          reseauxSli1A.css({
            'color': 'yellow'
          }); 
        }).mouseout(function(){
          reseauxSli1.css({
            'border'    : 'none',
            'background': 'none',
            'padding'   : '8px'
          });  
          reseauxSli1A.css({
            'color': 'red'
          });         
        });
// -------------------FIN MOUSEOVER --------------------
// --------------------MOUSEOVER ---------------------
        reseauxSli2.mouseover(function(){
          reseauxSli2.css({
            'border'         : 'solid 2px',
            'borderColor'    : 'yellow',
            'borderRadius'   : '18px',
            'backgroundColor': 'black',
            'padding'        : '8px'
          });
          reseauxSli2A.css({
            'color': 'yellow'
          }); 
        }).mouseout(function(){
          reseauxSli2.css({
            'border'    : 'none',
            'background': 'none',
            'padding'   : '8px'
          });  
          reseauxSli2A.css({
            'color': 'red'
          });          
        });
// -------------------FIN MOUSEOVER --------------------
// --------------------MOUSEOVER ---------------------
        reseauxSli3.mouseover(function(){
          reseauxSli3.css({
            'border'         : 'solid 2px',
            'borderColor'    : 'yellow',
            'borderRadius'   : '18px',
            'backgroundColor': 'black',
            'padding'        : '8px'
          });
          reseauxSli3A.css({
            'color': 'yellow'
          });

        }).mouseout(function(){
          reseauxSli3.css({
            'border'    : 'none',
            'background': 'none',
            'padding'   : '8px'
          });   
          reseauxSli3A.css({
            'color': 'red'
          });       
        });
// -------------------FIN MOUSEOVER --------------------
// ------------------------------------------------------------
        reseauxSA.css({
          'textDecoration': 'none',
          'fontSize'      : '20px'
        });
        reseauxSA.mouseover(function(){
          reseauxSA.css({
            'fontSize'      : '20px',
            'color'         : 'red'
          });
        });
      } // fin de la semi-colonne else

// ##########################    autoField    ##########################
      labelTitr0.css({
        'fontSize': '25px'
      });

      labelTitr1.css({
        'fontSize': '25px'
      });

      autoField.css({
        'marginLeft' : '10%',
        'marginRight': '10%'
      });

      autoField1.css({
        'marginLeft' : '10%',
        'marginRight': '10%'
      });
// ########################## AutoDiv ul li a ##########################
      autoDiv.css({
        'marginLeft': '5px'
      });
// ------------------------------------------------------
      autoDivUl.css({
        'float': 'left'
      });
// ------------------------------------------------------
      $('#autoImg0').mouseover(function(){});
      $('#autoImg3').mouseout(function(){
        
        $('#Aimg1').animate({
          'width': '350px',
          'height': '250px'
        });
        // $('#autoImg1').fadeIn();
        // $('#autoImg2').fadeIn();
      });
// ------------------------------------------
    })(); // FIN DE LA FUNCTION MOZILAR 

  }


  else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) //IF IE > 10
  {
    alert('IE'); 
  }  
  else 
  {
    alert('unknown');
  }
});

// '''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
//   ####################+++++++++++++++++++++++++++++++++####################
//   ########################################

//   ########################################
 
//   ##################################################################

/*
      headerUl.css({
        'marginRight' : '4%',
        'marginBottom': '2%'
      });

      headerUlLi.css({
        'overflow': 'hidden',
        'float'   : 'right',
        'margin'  : '0.1%',
        'border'  : 'solid 1px',
        'fontSize': ' 20px',
        'backgroundColor': 'white',
        'borderBottomRightRadius': '40%',
        'border'      : 'solid 2px',
        'padding'     : '2px',
        'paddingLeft' : '0.8%',
        'paddingRight': '0.8%',
        'borderColor' : 'blue'
      });
      headerUlLiA.css({
        'textDecoration': 'none',
        'fontSize'      : '20px',
        'paddingRight'  : '2px',
        'paddingLeft'   : '2px',
        'color'         : 'black'
      });

      overPic.css({
        'fontSize'       : '28px',
        'backgroundColor': 'none',
        'position'       : 'absolute',
        'margin'         : '0 auto',
        'z-index'        : '1',
        'right'          : '0',
        'left'           : '0',
        'color'          : 'black',
        'text-align'     : 'center'
      });
      overPic1.css({
        'fontSize': '20px',
        'position': 'absolute',
         'margin': '0 auto',
         'z-index': '1',
         'right': '0',
         'left': '0',
         'color': 'black',
         'bottom': '13%',
         'textAlign': 'center',
         'marginTop': '5%'
      });
      imgDoc.css({});
      imgDocUl.css({
        'margin': 'auto',
      });
      imgDocUlLi.css({
        'textDecoration': 'none',
        'border': 'solid 2px'
      });
      imgDocUlLiA.css({
        'padding': '3%',
        'overflow': 'hidden'
      });
      img1.css({
        'marginTop': '-20px'
      });
//  ################################################################################
      headerUlLi.on('mouseover', function(){
        headerUl.css({
          'marginLeft'  : '4%',
          'marginBottom': '2%'

        });
        headerUlLi.css({
          'backgroundColor'        : 'black',
          'borderBottomRightRadius': '40%',
          'border'                 : 'solid 2px',
          'padding'                : '2px',
          'paddingLeft'            : '0.8%',
          'paddingRight'           : '0.8%',
          'borderColor'            : 'yellow'
        });
        headerUlLiA.css({
          'textDecoration': 'none',
          'fontSize'      : '20px',
          'paddingRight'  : '2px',
          'paddingLeft'   : '2px',
          'color'         : 'white'
      });
      });

//  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
      headerUlLi.on('mouseout', function(){
        headerUl.css({
          'marginRight' : '4%',
          'marginBottom': '2%'
        });

        headerUlLi.css({
          'overflow': 'hidden',
          'float'   : 'right',
          'margin'  : '0.1%',
          'border'  : 'solid 1px',
          'fontSize': ' 20px',
          'backgroundColor': 'white',
          'borderBottomRightRadius': '40%',
          'border'      : 'solid 2px',
          'padding'     : '2px',
          'paddingLeft' : '0.8%',
          'paddingRight': '0.8%',
          'borderColor' : 'blue'
        });
        headerUlLiA.css({
          'textDecoration': 'none',
          'fontSize'      : '20px',
          'paddingRight'  : '2px',
          'paddingLeft'   : '2px',
          'color'         : 'black'
        });
      });
      /*
  background-color: black;
  border-bottom-right-radius: 40%;
  border: solid 2px;
  border-color: yellow;
  */