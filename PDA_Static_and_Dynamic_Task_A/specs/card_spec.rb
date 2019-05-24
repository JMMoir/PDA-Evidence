require ( 'minitest/autorun')
require ( 'minitest/rg')


require_relative('../testing_task_2.rb')
require_relative('../card.rb')


class CardGameTest < Minitest::Test

  def setup

    @card1 = Card.new('spades', 1)
    @card2 = Card.new('hearts', 5)

    @cards = [@card1, @card2]
  end

  def test_check_for_ace
    actual = CardGame.check_for_ace(@card1)
    assert_equal(true, actual)
  end

  def test_highest_card
    actual = CardGame.highest_card(@card1, @card2)
    assert_equal(@card2, actual)
  end

  #
  # def test_cards_total
  #   actual = CardGame.cards_total(@cards)
  #   assert_equal(6, actual)
  # end

end
