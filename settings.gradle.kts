rootProject.name = "student-house-app"

include("back-end:auth-service")
project(":back-end:auth-service").projectDir = file("back-end/auth-service")
