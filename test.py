from gpiozero import MCP3008
import time

# Create an MCP3008 object with SPI connection parameters
adc = MCP3008(channel=0)  # Assuming the MQ7 sensor is connected to CH0

try:
    while True:
        # Read analog voltage from channel 0
        analog_value = adc.value
        
        # Convert the analog voltage to a 10-bit integer value (0-1023)
        analog_int_value = int(analog_value * 1023)
        
        # Print the analog value
        print("Analog value (CH0):", analog_value)
        
        # Optionally, print the integer value for debugging
        print("Analog value (integer):", analog_int_value)
        
        # Wait for a short interval before reading again
        time.sleep(1)

except KeyboardInterrupt:
    # Handle keyboard interrupt (Ctrl+C)
    print("Script terminated by user.")
