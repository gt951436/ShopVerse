import 'package:email_validator/email_validator.dart';
import 'package:flutter/material.dart';
import 'package:frontend/core/ui.dart';
import 'package:frontend/presentation/screens/auth/login_screen.dart';
import 'package:frontend/presentation/screens/auth/providers/signup_provider.dart';
import 'package:frontend/presentation/screens/widgets/gap_widget.dart';
import 'package:frontend/presentation/screens/widgets/link_button.dart';
import 'package:frontend/presentation/screens/widgets/primary_button.dart';
import 'package:frontend/presentation/screens/widgets/primary_textfield.dart';
import 'package:provider/provider.dart';

class SignupScreen extends StatefulWidget {
  const SignupScreen({super.key});

  static const String routeName = "signup";
  @override
  State<SignupScreen> createState() => _SignupScreenState();
}

class _SignupScreenState extends State<SignupScreen> {
  @override
  Widget build(BuildContext context) {
    final provider = Provider.of<SignupProvider>(context);

    return Scaffold(
      appBar: AppBar(
        centerTitle: true,
        elevation: 0,
        title: const Text(
          "SHOPVERSE",
          style: TextStyle(fontWeight: FontWeight.w500),
        ),
      ),
      body: SafeArea(
        child: Form(
          key: provider.formKey,
          child: ListView(
            padding: const EdgeInsets.all(16),
            children: [
              Text(
                "Create Account",
                style: TextStyles.heading2,
              ),
              const GapWidget(size: -10),
              (provider.error != "")
                  ? Text(
                      provider.error,
                      style: const TextStyle(color: Colors.red),
                    )
                  : const SizedBox(),
              const GapWidget(size: 5),
              PrimaryTextField(
                controller: provider.emailController,
                validator: (value) {
                  if (value == null || value.trim().isEmpty) {
                    return "Email address is required!";
                  }
                  if (!EmailValidator.validate(value.trim())) {
                    return "Invalid Email address!";
                  }
                  return null;
                },
                labelText: "Email Address",
              ),
              const GapWidget(),
              PrimaryTextField(
                controller: provider.passwordController,
                labelText: "Password",
                obscureText: true,
                validator: (value) {
                  if (value == null || value.trim().isEmpty) {
                    return "Password is required!";
                  }
                  return null;
                },
              ),
              const GapWidget(),
              PrimaryTextField(
                controller: provider.confirmPasswordController,
                labelText: "Confirm Password",
                obscureText: true,
                validator: (value) {
                  if (value == null || value.trim().isEmpty) {
                    return "Confirm your Password!";
                  }
                  if (value.trim() != provider.passwordController.text.trim()) {
                    return "Passwords do not match!";
                  }
                  return null;
                },
              ),
              const GapWidget(),
              PrimaryButton(
                  onPressed: provider.createAccount,
                  text: (provider.isLoading) ? "..." : "Create Account"),
              const GapWidget(),
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Text(
                    "Already have an account?",
                    style: TextStyles.body2,
                  ),
                  const GapWidget(),
                  LinkButton(
                    text: "Sign In",
                    onPressed: () {
                      Navigator.pushNamed(context, LoginScreen.routeName);
                    },
                  ),
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }
}
