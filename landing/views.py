from django.shortcuts import render

# Create your views here.

def index(request):
    if request.method == "POST":
        # Handle form submission (you can add more logic here)
        name = request.POST.get('name')
        email = request.POST.get('email')
        message = request.POST.get('message')
        # Save to database, send email, etc.
    return render(request, 'landing/index.html')
