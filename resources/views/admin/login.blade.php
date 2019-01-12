<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>Admin service </title>
        <link rel="shortcut icon"  href="images/logo.png">
        <link rel="stylesheet" type="text/css" href="{{ asset('css/app.css') }}">
        <link rel="stylesheet" type="text/css" href="{{ asset('css/bootstrap.min.css')  }}">
        <link rel="stylesheet" type="text/css" href="{{ asset('css/admin.css') }}">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
        <script type="text/javascript">
            window.Laravel = {!! json_encode([
                'baseUrl' => url('/'),
                'csrfToken' => csrf_token(),
            ]) !!};
        </script>
    </head>
    <body>
    <div id="admin"></div>
        <div class="container">
	<div class="row text-center mb-4">
		<div class="col-md-12">
		    <h4>Saigon Watches Shop Admin</h4>
		</div>
	</div>
	<div class="row text-center">
	    <div class="col-md-6 offset-md-3">
	        <div class="card">
	            <div class="card-body">
	                <div class="login-title">
	                    <h4>Admin Log In</h4>
	                </div>
	                <div class="login-form mt-4">
                    @if (count($errors) >0)
                        <ul>
                            @foreach($errors->all() as $error)
                                <li class="text-danger"> {{ $error }}</li>
                            @endforeach
                        </ul>
                    @endif

                    @if (session('status'))
                        <ul>
                            <li class="text-danger"> {{ session('status') }}</li>
                        </ul>
                    @endif
	                    <form action="{{ route('getLogin') }}" method="post">
                        {{ csrf_field() }}
                        <div class="form-row">
                            <div class="form-group col-md-12">
                              <input id="email" name="email" placeholder="Email Address" class="form-control" type="text">
                            </div>
                            <div class="form-group col-md-12">
                              <input type="password" name="password" class="form-control" id="pass" placeholder="Password">
                            </div>
                          </div>
                         <div class="form-row">
                    </div>                        
                        
                        <div class="form-row">
                            <button type="submit" class="btn btn-success btn-block">Submit</button>
                        </div>
                    </form>
	                </div>
	            </div>
	        </div>
	    </div>
	</div>
</div>


        <script type="text/javascript" src="{{ asset('js/app.js') }}"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script> 
        <script ype="text/javascript" src="{{ asset('js/bootstrap.min.js')  }}"></script> 
        <script src="{{ asset('js/jquery.fancybox.pack.js') }}"></script> 
        <script src="{{ asset('js/retina.min.js') }}"></script> 
        <script src="{{ asset('js/modernizr.js')    }}"></script> 
        <script src="{{ asset('js/main.js') }}"></script>
    </body>
</html>
