// global cubit for user
import 'package:frontend/data/models/user/user.model.dart';

abstract class UserState {}

class UserInitState extends UserState {}

class UserLoadingState extends UserState {}

class UserLoggedInState extends UserState {
  final userModel UserModel;
  UserLoggedInState(this.UserModel);
}

class UserLoggedOutState extends UserState {}

class UserErrorState extends UserState {
  final String message;
  UserErrorState(this.message);
}
