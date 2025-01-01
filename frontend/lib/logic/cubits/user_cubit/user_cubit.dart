import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:frontend/data/models/user/user.model.dart';
import 'package:frontend/data/repositories/user.repository.dart';
import 'package:frontend/logic/cubits/user_cubit/user_state.dart';
import 'package:frontend/logic/services/preferences.dart';

class UserCubit extends Cubit<UserState> {
  UserCubit() : super(UserInitState()) {
    _initialize();
  }
  final userRepository _UserRepository = userRepository();

  void _initialize() async {
    final userDetails = await Preferences.fetchUserDetails();
    String? email = userDetails["email"];
    String? password = userDetails["password"];

    if (email == null || password == null) {
      emit(UserLoggedOutState());
    } else {
      signIn(email: email, password: password);
    }
  }

  void _emitLoggedInState(
      {required userModel UserModel,
      required String email,
      required String password}) async {
    await Preferences.saveUserDetails(email, password);
    emit(UserLoggedInState(UserModel));
  }

  void signIn({required String email, required String password}) async {
    emit(UserLoadingState());
    try {
      userModel UserModel =
          await _UserRepository.signIn(email: email, password: password);

      _emitLoggedInState(
          UserModel: UserModel, email: email, password: password);
    } catch (ex) {
      emit(UserErrorState(ex.toString()));
    }
  }

  void createAccount({required String email, required String password}) async {
    emit(UserLoadingState());
    try {
      userModel UserModel =
          await _UserRepository.createAccount(email: email, password: password);
      _emitLoggedInState(
          UserModel: UserModel, email: email, password: password);
    } catch (ex) {
      emit(UserErrorState(ex.toString()));
    }
  }

  void signOut() async {
    await Preferences.clear();
    emit(UserLoggedOutState());
  }
}
