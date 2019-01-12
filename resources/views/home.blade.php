<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>Web service</title>
        
        <link rel="shortcut icon"  href="{{ asset('images/logo.png')    }}">
        <link rel="stylesheet" type="text/css" href="{{ asset('css/app.css') }}">
        <link rel="stylesheet" type="text/css" href="{{ asset('css/bootstrap.min.css')  }}">
        <link rel="stylesheet" type="text/css" href="{{ asset('css/flexslider.css')  }}">
        <link rel="stylesheet" type="text/css" href="{{ asset('css/jquery.fancybox.css')    }}">
        <link rel="stylesheet" type="text/css" href="{{ asset('css/main.css')   }}">
        <link rel="stylesheet" type="text/css" href="{{ asset('css/responsive.css') }}">
        <link rel="stylesheet" type="text/css" href="{{ asset('css/animate.min.css')    }}">
        <link rel="stylesheet" type="text/css" href="{{ asset('css/css/font-icon.css')  }}">
        <link rel="stylesheet" type="text/css" href="{{ asset('css/login.css') }}">
        <!-- <link rel="stylesheet" type="text/css" href="{{ asset('css/products.css') }}"> -->
        <link rel="stylesheet" type="text/css" href="{{ asset('css/semantic-ui.css') }}">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
        <script type="text/javascript">
            window.Laravel = {!! json_encode([
                'baseUrl' => url('/'),
                'csrfToken' => csrf_token(),
            ]) !!};
        </script>
    </head>
    <body>
        <div id="app"></div>
        
        <script type="text/javascript" src="{{ asset('js/app.js') }}"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script> 
        <script ype="text/javascript" src="{{ asset('js/bootstrap.min.js')  }}"></script> 
        <script src="{{ asset('js/jquery.fancybox.pack.js') }}"></script> 
        <script src="{{ asset('js/retina.min.js') }}"></script> 
        <script src="{{ asset('js/modernizr.js')    }}"></script> 
        <script src="{{ asset('js/main.js') }}"></script>
    </body>
</html>