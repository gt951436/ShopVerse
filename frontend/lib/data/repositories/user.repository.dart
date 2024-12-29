// API se data fetch krke model me daalega
import 'dart:convert';

import 'package:dio/dio.dart';
import 'package:frontend/core/api.dart';
import 'package:frontend/data/models/user/user.model.dart';

class userRepositoty {
  final _api = Api();
  Future<userModel> createAccount(
      {required String email, required String password}) async {
    try {
      Response response = await _api.sendRequest.post("/user/createAccount",
          data: jsonEncode({"email": email, "password": password}));

      ApiResponse apiResponse = ApiResponse.fromResponse(response);
      if (!apiResponse.success) {
        throw apiResponse.message.toString();
      }
      // convert raw data to model
      return userModel.fromJson(apiResponse.data);
    } catch (e) {
      rethrow;
    }
  }

  Future<userModel> signIn(
      {required String email, required String password}) async {
    try {
      Response response = await _api.sendRequest.post("/user/signIn",
          data: jsonEncode({"email": email, "password": password}));

      ApiResponse apiResponse = ApiResponse.fromResponse(response);
      if (!apiResponse.success) {
        throw apiResponse.message.toString();
      }
      // convert raw data to model
      return userModel.fromJson(apiResponse.data);
    } catch (e) {
      rethrow;
    }
  }
}
