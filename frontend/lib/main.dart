import 'package:flutter/material.dart';
import 'package:frontend/core/routes.dart';
import 'package:frontend/core/ui.dart';
import 'package:frontend/presentation/screens/auth/login_screen.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  runApp(const EcommerceApp());
}

class EcommerceApp extends StatelessWidget {
  const EcommerceApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      theme: Themes.defaultTheme,
      onGenerateRoute: Routes.onGenerateRoute,
      initialRoute: LoginScreen.routeName,
    );
  }
}
