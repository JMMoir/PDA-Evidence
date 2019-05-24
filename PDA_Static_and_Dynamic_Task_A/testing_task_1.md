### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby
### Testing task 2 code:

# Carry out dynamic testing on the code below.
# Correct the errors below that you spotted in task 1.

require_relative('card.rb')

class CardGame

## should be written check_for_ace and if statement should be ==, needs to be class method
  def checkforAce(card)
    if card.value = 1
      return true
    else
      return false
    end
  end


## dif should be def and needs a comma between the cards, needs to be class method
  dif highest_card(card1 card2)
  if card1.value > card2.value
    ##  there is no .name if first condition is true it should return card1
    return card.name
  else
    card2
  end
end

### this end should be below the next method
end
#####

### total needs to be total = 0
def self.cards_total(cards)
  total
  for card in cards
    total += card.value
    ### Return should be below the first end
    return "You have a total of" + total
  end
end


```
