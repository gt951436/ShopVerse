import 'dart:ui';

import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/painting.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter/widgets.dart';
import 'package:frontend/core/ui.dart';
import 'package:frontend/presentation/screens/widgets/gap_widget.dart';
import 'package:frontend/presentation/screens/widgets/link_button.dart';
import 'package:frontend/presentation/screens/widgets/primary_button.dart';
import 'package:frontend/presentation/screens/widgets/primary_textfield.dart';

class LoginScreen extends StatefulWidget {
  const LoginScreen({super.key});
  static const String routeName = "login";
  @override
  State<LoginScreen> createState() => _LoginScreenState();
}

class _LoginScreenState extends State<LoginScreen> {
  final emailController = TextEditingController();
  final passwordController = TextEditingController();

  @override
  Widget build(BuildContext context) {
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
        child: ListView(
          padding: const EdgeInsets.all(16),
          children: [
            Text(
              "Log In",
              style: TextStyles.heading2,
            ),
            const GapWidget(),
            PrimaryTextField(
              controller: emailController,
              labelText: "Email Address",
            ),
            const GapWidget(),
            PrimaryTextField(
              controller: passwordController,
              labelText: "Password",
              obscureText: true,
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.end,
              children: [
                LinkButton(
                  text: "Forgot Password?",
                  onPressed: () {},
                ),
              ],
            ),
            const GapWidget(),
            PrimaryButton(
              onPressed: () {},
              text: "Log In",
            ),
            const GapWidget(),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                const Text(
                  "Don't have an account?",
                  style: TextStyle(fontSize: 16),
                ),
                const GapWidget(),
                LinkButton(
                  text: "Sign Up",
                  onPressed: () {},
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
