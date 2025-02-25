class Fine < ApplicationRecord
  belongs_to :user

  validates :paid, inclusion: { in: [ true, false ] }

  enum :fine_type, {
    lost_game: 0,
    goal_conceded: 1,
    late_for_game: 2,
    missed_penalty: 3,
    debut: 4,
    clothes_not_turned_inside_out: 5,
    more_than_seven_votes_mvp: 6,
    yellow_card: 7,
    stupid_yellow_card: 8,
    red_card: 9,
    stupid_red_card: 10,
    tape_on_boot: 11,
    birthday_on_matchday: 12,
    new_cleats: 13,
    drinking_before_cheers: 14,
    absence_without_notice: 15,
    old_man_injury: 16,
    lost_goods: 17,
    phone_under_tactics: 18,
    stripping_before_mvp: 19,
    spilled_drink: 20,
    the_cream_fine: 21,
    urination_in_the_shower: 22,
    style_hair_before_game: 23,
    complaints_to_fine_manager: 24,
    holes_in_boxers: 25,
    the_smelly_fine: 26,
    the_daddy_fine: 27,
    new_house_car: 28,
    dirty_from_shower: 29,
    no_celebration: 30,
    forgot_cleats_matchday: 31
  }

  def pretty_fine_type
    I18n.t("enum.fine_type.#{fine_type}")
  end
end
