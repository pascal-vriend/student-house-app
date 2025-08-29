rootProject.name = "student-house-app"

include("back-end:auth-service")
project(":back-end:auth-service").projectDir = file("back-end/auth-service")

include("back-end:gateway")
project(":back-end:gateway").projectDir = file("back-end/gateway")

include("back-end:eureka-server")
project(":back-end:eureka-server").projectDir = file("back-end/eureka-server")

include("back-end:finance-service")
project(":back-end:finance-service").projectDir = file("back-end/finance-service")

include("back-end:house-service")
project(":back-end:house-service").projectDir = file("back-end/house-service")
