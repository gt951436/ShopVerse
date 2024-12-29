class userModel {
  String? sId;
  String? fullname;
  String? email;
  String? password;
  String? phone;
  String? city;
  String? state;
  String? address;
  int? profileProgress;
  String? createdAt;
  String? updatedAt;
  String? id;
  String? updatedOn;
  String? createdOn;

  userModel(
      {this.sId,
      this.fullname,
      this.email,
      this.password,
      this.phone,
      this.city,
      this.state,
      this.address,
      this.profileProgress,
      this.createdAt,
      this.updatedAt,
      this.id,
      this.updatedOn,
      this.createdOn});

  userModel.fromJson(Map<String, dynamic> json) {
    sId = json['_id'];
    fullname = json['fullname'];
    email = json['email'];
    password = json['password'];
    phone = json['phone'];
    city = json['city'];
    state = json['state'];
    address = json['address'];
    profileProgress = json['profileProgress'];
    createdAt = json['createdAt'];
    updatedAt = json['updatedAt'];
    id = json['id'];
    updatedOn = json['updatedOn'];
    createdOn = json['createdOn'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data['_id'] = this.sId;
    data['fullname'] = this.fullname;
    data['email'] = this.email;
    data['password'] = this.password;
    data['phone'] = this.phone;
    data['city'] = this.city;
    data['state'] = this.state;
    data['address'] = this.address;
    data['profileProgress'] = this.profileProgress;
    data['createdAt'] = this.createdAt;
    data['updatedAt'] = this.updatedAt;
    data['id'] = this.id;
    data['updatedOn'] = this.updatedOn;
    data['createdOn'] = this.createdOn;
    return data;
  }
}
