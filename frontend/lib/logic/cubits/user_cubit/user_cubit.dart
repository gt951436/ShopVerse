import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:frontend/data/models/user/user.model.dart';
import 'package:frontend/data/repositories/user.repository.dart';
import 'package:frontend/logic/cubits/user_cubit/user_state.dart';

class UserCubit extends Cubit<UserState> {
  UserCubit() : super(UserInitState());

  final userRepository _UserRepository = userRepository();
  void signIn({required String email, required String password}) async {
    emit(UserLoadingState());
    try {
      userModel UserModel =
          await _UserRepository.signIn(email: email, password: password);
      emit(UserLoggedInState(UserModel));
    } catch (ex) {
      emit(UserErrorState(ex.toString()));
    }
  }

  void createAccount({required String email, required String password}) async {
    emit(UserLoadingState());
    try {
      userModel UserModel =
          await _UserRepository.createAccount(email: email, password: password);
      emit(UserLoggedInState(UserModel));
    } catch (ex) {
      emit(UserErrorState(ex.toString()));
    }
  }
}
